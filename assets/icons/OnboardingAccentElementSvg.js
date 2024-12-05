import * as React from "react"
import Svg, {
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
const OnboardingAccentElementSvg = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={190}
        height={393}
        fill="none"
    >
        <Path
            fill="url(#a)"
            d="M60.35 142.488c-3.49-1.561-4.009-6.301-.939-8.58L165.25 55.37a5 5 0 0 1 7.329 1.55l66.842 117.939a5 5 0 0 1-2.171 6.966l-40.604 19.661a5.002 5.002 0 0 1-4.22.064L60.35 142.488Z"
        />
        <Path
            fill="url(#b)"
            d="M3.35 88.488c-3.49-1.56-4.009-6.301-.939-8.58L108.25 1.37a5 5 0 0 1 7.329 1.55l66.842 117.939a5 5 0 0 1-2.171 6.966l-40.604 19.661a5.002 5.002 0 0 1-4.22.064L3.35 88.488Z"
        />
        <Path
            fill="url(#c)"
            d="M96.35 231.488c-3.49-1.561-4.009-6.301-.939-8.58L201.25 144.37a5 5 0 0 1 7.329 1.55l66.842 117.939a5 5 0 0 1-2.171 6.966l-40.604 19.661a5.002 5.002 0 0 1-4.22.064L96.35 231.488Z"
        />
        <Path
            fill="url(#d)"
            d="M136.35 333.488c-3.49-1.561-4.009-6.301-.939-8.58l105.838-78.538a5 5 0 0 1 7.329 1.55l66.842 117.939a5 5 0 0 1-2.171 6.966l-40.604 19.661a5.002 5.002 0 0 1-4.22.064L136.35 333.488Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={110.895}
                x2={196.89}
                y1={95.124}
                y2={212.567}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#505050" />
                <Stop offset={1} stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="b"
                x1={53.895}
                x2={139.89}
                y1={41.125}
                y2={158.567}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#505050" />
                <Stop offset={1} stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="c"
                x1={146.895}
                x2={232.89}
                y1={184.125}
                y2={301.567}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#505050" />
                <Stop offset={1} stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="d"
                x1={186.895}
                x2={272.89}
                y1={286.125}
                y2={403.567}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#505050" />
                <Stop offset={1} stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default OnboardingAccentElementSvg;
