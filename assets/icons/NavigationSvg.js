import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const NavigationSvg = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={34}
        height={34}
        fill="none"
    >
        <Path
            fill="#355EB5"
            d="M34 17c0 9.389-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0s17 7.611 17 17Z"
        />
        <Path
            fill="#fff"
            d="m21.507 13.006-10.276 3.63c-.28.093-.326.558-.024.652l4.601 1.908L17.7 23.78c.14.372.56.209.654-.024l3.62-10.285c.117-.279-.187-.511-.467-.465Z"
        />
    </Svg>
)
export default NavigationSvg
