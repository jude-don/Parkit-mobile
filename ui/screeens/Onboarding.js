import { StatusBar, Text, View, StyleSheet, Image } from "react-native";
import AppColors from "../../assets/colors";
import AppStrings from "../../assets/strings";
import VerticalSpacer from "../components/VerticalSpacer";
import OnboardingAccentElementSvg from "../../assets/icons/OnboardingAccentElementSvg";
import Dimensions from "../../assets/dimensions";
import PrimaryButton from "../components/PrimaryButton";
import {CommonActions} from "@react-navigation/native";

export default function Onboarding({ navigation }) {
    const handleButtonClick = () => {
        // TODO: Remove this function once all buttons are removed
        console.log("Button Clicked, implement navigation");
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={AppColors.primaryBgColor}
                barStyle="light-content"
            />
            <View style={styles.upperContainer}>
                {/* Accent Design */}
                <View style={styles.accentElement}>
                    <OnboardingAccentElementSvg />
                </View>

                {/* Car Image and Text */}
                <View style={styles.leftSectionContainer}>
                    <Text style={styles.titleText}>{AppStrings.parkIt}</Text>
                    <VerticalSpacer height={88} />
                    <Image
                        source={require("../../assets/images/car.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            </View>

            <VerticalSpacer height={60} />
            <Text style={styles.onboardingText}>{AppStrings.onboarding}</Text>
            <VerticalSpacer height={25} />
            <Text style={styles.onboardingSubText}>
                {AppStrings.onboardingSubtext}
            </Text>
            <VerticalSpacer height={35} />
            <View style={styles.buttonsContainer}>
                <PrimaryButton onClick={
                    () =>{
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0, // Index of the active route in the new stack
                                routes: [
                                    { name: 'Create Account Screen' }, // The screen to navigate to
                                ],
                            })
                        );
                    }
                }>
                    <Text style={styles.buttonText}>{AppStrings.getStarted}</Text>
                </PrimaryButton>
                <VerticalSpacer height={20} />
                <PrimaryButton
                    onClick={
                        () =>{
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0, // Index of the active route in the new stack
                                    routes: [
                                        { name: 'Login Screen' }, // The screen to navigate to
                                    ],
                                })
                            );
                        }
                }
                    bgColor={AppColors.primaryBgColor}
                >
                    <Text style={styles.buttonText}>{AppStrings.singIn}</Text>
                </PrimaryButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        backgroundColor: AppColors.primaryBgColor,
        justifyContent: "flex-start",
    },
    upperContainer: {
        flexDirection: "row",
        alignContent: "flex-start",
        justifyContent: "space-evenly",
    },
    leftSectionContainer: {
        flexDirection: "column",
        paddingTop: 44,
        zIndex: 2, // Ensures this container is in front of the accent
    },
    titleText: {
        fontSize: 24,
        fontFamily: "Lato_700Bold",
        color: AppColors.whiteColor,
        textAlign: "left",
        paddingStart: Dimensions.buttonPaddingHorizontal,
    },
    image: {
        width: 409.783, // Adjusted for 20% smaller size
        height: 196.739, // Adjusted for 20% smaller size
        alignSelf: "flex-start",
    },
    accentElement: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 190, // Adjust dimensions as needed
        height: 150,
        zIndex: 1, // Ensures this is behind the car image
    },
    onboardingText: {
        fontSize: 30,
        fontFamily: "Lato_400Regular",
        fontWeight: "500",
        textAlign: "left",
        paddingHorizontal: Dimensions.buttonPaddingHorizontal,
        flexWrap: "wrap",
        color: AppColors.whiteColor,
        letterSpacing: 1.3,
    },
    onboardingSubText: {
        color: AppColors.whiteColor,
        fontSize: 18,
        fontFamily: "Lato_400Regular",
        fontWeight: "400",
        paddingHorizontal: Dimensions.buttonPaddingHorizontal,
        textAlign: "left",
        letterSpacing: 1.15,
    },
    buttonText: {
        color: AppColors.whiteColor,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
        fontWeight: "500",
    },
    buttonsContainer: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "flex-start",
        paddingHorizontal: Dimensions.buttonPaddingHorizontal,
    },
});
