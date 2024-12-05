import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
const CloseSvg = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"

    >
        <G stroke="#fff">
            <Rect width={19} height={19} x={0.5} y={0.5} rx={9.5} />
            <G strokeLinecap="round" strokeLinejoin="round">
                <Path d="m6.464 6.465 7.072 7.07M6.442 13.514l7.072-7.072" />
            </G>
        </G>
    </Svg>
)
export default CloseSvg
