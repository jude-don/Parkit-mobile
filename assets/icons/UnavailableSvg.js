import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const UnavailableSvg = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
    >
        <Path
            fill="#fff"
            fillOpacity={0.5}
            fillRule="evenodd"
            d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Zm3.867 6.796a.5.5 0 1 0-.707-.707L9.978 9.27l-3.16-3.16a.5.5 0 1 0-.707.707l3.16 3.16-3.182 3.182a.5.5 0 1 0 .707.707l3.182-3.182 3.204 3.204a.5.5 0 0 0 .707-.707l-3.204-3.204 3.182-3.182Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default UnavailableSvg
