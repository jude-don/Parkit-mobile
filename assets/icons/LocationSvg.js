import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LocationSvg = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={20}
        fill="none"
    >
        <Path
            fill="#fff"
            fillOpacity={0.5}
            d="M12.663 9.252a6.508 6.508 0 0 0 .655-2.803C13.318 2.897 10.42 0 6.869 0 3.318 0 .42 2.897.42 6.449c0 .996.25 1.962.655 2.803 0 0 .124.28.155.312L6.87 20l5.576-10.28c.063-.125.218-.468.218-.468ZM6.87 3.24a3.204 3.204 0 0 1 3.209 3.209c0 1.775-1.433 3.24-3.209 3.24a3.204 3.204 0 0 1-3.209-3.21c0-1.775 1.433-3.24 3.209-3.24Z"
        />
    </Svg>
)
export default LocationSvg;
