flake: {pkgs, ...}: let
  # Hostplatform system
  system = pkgs.hostPlatform.system;

  # Production package
  base = flake.packages.${system}.default;
in
  pkgs.mkShell {
    inputsFrom = [base];

    packages = with pkgs; [
      eslint
      nodePackages.typescript
      nodePackages.typescript-language-server

      # Hail the Nix
      nixd
      statix
      deadnix
      alejandra

      # Tailwind
      tailwindcss
    ];
  }
