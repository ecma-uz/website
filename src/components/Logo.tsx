export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
    const brandColor = "#00FF88";

    return (
        <svg
            viewBox="0 0 1000 1000"
            width="1000px"
            height="1000px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-auto sm:h-20 lg:h-24"
            {...props}
        >
            <title>Uzbek Ecma #2</title>
            <g id="Uzbek-Ecma-#2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <rect fill={brandColor} x="0" y="0" width="1000" height="1000"></rect>
                <text id="UE" font-family="SFPro-Bold, SF Pro" font-size="400" font-weight="bold" fill="#000000">
                    <tspan x="486.896484" y="970">UE</tspan>
                </text>
                <text id="2025" font-family="SFPro-Bold, SF Pro" font-size="190" font-weight="bold" fill="#000000">
                    <tspan x="506.752441" y="657">2025</tspan>
                </text>
            </g>
        </svg>
    )
}