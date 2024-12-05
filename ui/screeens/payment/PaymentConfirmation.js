import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    Platform,
} from "react-native";
import AppColors from "../../../assets/colors";
import HorizontalSpacer from "../../components/HorizontalSpacer";
import AppStrings from "../../../assets/strings";
import LottieView from 'lottie-react-native';
import VerticalSpacer from "../../components/VerticalSpacer";
import PrimaryButton from "../../components/PrimaryButton";
import {CommonActions} from "@react-navigation/native";

export default function PaymentConfirmation({ navigation }) {
    const handleButtonClick = () => {
        console.log("Pay button clicked, navigate to the next step");
    };
    let srcVideo = require('../../../assets/animations/4JTZtKHFsm.json')

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={AppColors.primaryBgColor} barStyle="light-content" />
            {/* Header */}
            <View style={styles.topAppBarContainer}>
                <Text style={styles.titleText}>{AppStrings.payment}</Text>
            </View>

            {/* Payment Info */}
            <View style={styles.contentContainer}>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={srcVideo}
                        autoPlay
                        loop={false}
                        style={styles.animation}
                    />
                </View>
                <VerticalSpacer height={30}/>
                <Text style={styles.messageContainer}>
                    {AppStrings.paymentSuccessful}
                </Text>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={
                        ()=> {
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0, // Index of the active route in the new stack
                                    routes: [
                                        { name: 'Home Screen' }, // The screen to navigate to
                                    ],
                                })
                            );
                        }
                    }>
                        <Text style={styles.buttonText}>
                            {AppStrings.done}
                        </Text>
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primaryBgColor,
    },
    topAppBarContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderTopColor: "transparent",
        borderColor: AppColors.appBarColor,
        borderWidth: 0.5,
    },
    titleText: {
        fontSize: 20,
        color: AppColors.whiteColor,
        fontFamily: "Lato_700Bold",
    },
    contentContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        backgroundColor: AppColors.primaryBgColor,
        paddingTop: 20,
    },
    messageContainer: {
        fontSize: 18,
        color: AppColors.whiteColor,
        fontFamily: "Lato_400Regular",
        fontWeight: '600',
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 0,
        paddingBottom: Platform.OS === 'android' ? 50 : 0,
    },
    buttonText: {
        color: AppColors.whiteColor,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
        fontWeight: "500",
    },
    animationContainer:{
        borderRadius: 10,
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.primaryBgColor
    },
    animation: {
        height: 150,
        width: 150
    },
});
