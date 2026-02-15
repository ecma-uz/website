{
  pkgs ? let
    lock = (builtins.fromJSON (builtins.readFile ./flake.lock)).nodes.nixpkgs.locked;
    nixpkgs = fetchTarball {
      url = "https://github.com/nixos/nixpkgs/archive/${lock.rev}.tar.gz";
      sha256 = lock.narHash;
    };
  in
    import nixpkgs {overlays = [];},
  ...
}: let
  manifest = pkgs.lib.importJSON ./package.json;
in
  # pkgs.stdenv.mkDerivation {
  pkgs.buildNpmPackage {
    pname = manifest.name;
    version = manifest.version;

    src = ./.;
    npmDepsHash = "sha256-fbzOsLoqKVa8wFxn3zj4r5nVPABKME5L4Chb2CNAVlk=";

    installPhase = ''
      # Create output directory
      mkdir -p $out

      # Copy standalone as library
      cp -R ./out/* $out/
    '';

    nativeBuildInputs = with pkgs; [
      nodejs
      pnpm
      corepack
      typescript
    ];

    buildInputs = with pkgs; [
      vips
      openssl
    ];

    NODE_TLS_REJECT_UNAUTHORIZED = 0;

    meta = with pkgs.lib; {
      homepage = "https://ecma.uz";
      description = manifest.description;
      license = with licenses; [cc-by-40];
      platforms = with platforms; linux ++ darwin;
      maintainers = with maintainers; [orzklv];
    };
  }
