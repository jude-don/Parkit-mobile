import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions, Platform,
} from "react-native";
import AppColors from "../../../assets/colors";
import HorizontalSpacer from "../../components/HorizontalSpacer";
import AppStrings from "../../../assets/strings";
import Feather from "@expo/vector-icons/Feather";
import CardSvg from "../../../assets/icons/CardSvg";
import CashSvg from "../../../assets/icons/CashSvg";
import PaymentSvg from "../../../assets/icons/PaymentSvg";
import VerticalSpacer from "../../components/VerticalSpacer";
import PrimaryButton from "../../components/PrimaryButton";
import {CommonActions} from "@react-navigation/native";

export default function PaymentPortal({ route, navigation }) {
    const { amount } = route.params;
    const handleButtonClick = () => {
        console.log("Pay button clicked, navigate to the next step");
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={AppColors.primaryBgColor} barStyle="light-content" />
            {/* Header */}
            <View style={styles.topAppBarContainer}>
                <Text style={styles.titleText}>{AppStrings.payment}</Text>
            </View>

            {/* Payment Info */}
            <View style={styles.contentContainer}>
                <Text style={styles.paymentInfoText}>
                    {AppStrings.paymentInfo}
                </Text>
                <Text style={styles.amountText}>
                    {amount}
                </Text>

                {/* Payment Options */}
                <View style={styles.paymentOptions}>
                    <TouchableOpacity style={[styles.option, styles.activeOption]}>
                        <Text style={styles.optionText}>
                            {AppStrings.card}
                        </Text>
                        <HorizontalSpacer width={5} />
                        <CardSvg/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>
                            {AppStrings.cash}
                        </Text>
                        <HorizontalSpacer width={5} />
                        <CashSvg/>
                    </TouchableOpacity>
                </View>

                {/* Card Details */}
                <View style={styles.cardDetails}>
                    <Text style={styles.label}>
                        {AppStrings.cardNumber}
                    </Text>
                    <View style={styles.cardNumberContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="1234 1234 1234 1234"
                            placeholderTextColor={AppColors.placeholderColor}
                            keyboardType="number-pad"
                        />
                        <PaymentSvg/>

                    </View>
                    <VerticalSpacer height={8}/>
                    <View style={styles.expiryAndCvc}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Expiration</Text>
                            <TextInput
                                style={styles.input}
                                placeholder={AppStrings.monthYear}
                                placeholderTextColor={AppColors.placeholderColor}
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>
                                {AppStrings.cvc}
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={AppStrings.cvc}
                                placeholderTextColor={AppColors.placeholderColor}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <VerticalSpacer height={8}/>

                    <Text style={styles.label}>
                        {AppStrings.nameOnCard}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={AppStrings.firstLast}
                        placeholderTextColor={AppColors.placeholderColor}
                    />
                </View>

                {/* Pay Button */}
                <View style={styles.buttonContainer}>
                    <PrimaryButton onClick={
                        ()=> {
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0, // Index of the active route in the new stack
                                    routes: [
                                        { name: 'Payment Confirmation Screen' }, // The screen to navigate to
                                    ],
                                })
                            );
                        }
                    }>
                        <Text style={styles.buttonText}>
                            {AppStrings.pay}
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
    paymentInfoText: {
        fontSize: 16,
        color: AppColors.placeholderColor,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
    },
    amountText: {
        fontSize: 36,
        color: AppColors.whiteColor,
        textAlign: "center",
        fontFamily: "Lato_700Bold",
        marginVertical: 20,
    },
    paymentOptions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: AppColors.primaryBgColor,
        borderRadius: 8,
        padding: 10,
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 5,
    },
    activeOption: {
        backgroundColor: AppColors.altBtnColor,
        borderColor: AppColors.altBtnColor,
    },
    optionText: {
        fontSize: 16,
        color: AppColors.whiteColor,
        fontFamily: "Lato_400Regular",
    },
    cardDetails: {
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        color: AppColors.placeholderColor,
        fontFamily: "Lato_400Regular",
    },
    input: {
        paddingVertical: 15,
        color: AppColors.whiteColor,
        fontFamily: "Lato_400Regular",
    },
    expiryAndCvc: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor:AppColors.whiteColor,
        borderWidth: 0.5,
        borderTopColor: 'transparent',
        borderStartColor: 'transparent',
        borderEndColor: 'transparent',
    },
    column: {
        flex: 1,
        marginHorizontal: 0,
    },
    payButton: {
        backgroundColor: AppColors.primaryColor,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 30,
    },
    payButtonText: {
        fontSize: 16,
        color: AppColors.whiteColor,
        fontFamily: "Lato_700Bold",
    },
    cardNumberContainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        borderBottomColor:AppColors.whiteColor,
        borderTopColor: 'transparent',
        borderStartColor: 'transparent',
        borderEndColor: 'transparent',
        borderWidth: 0.5,
        alignItems:'center'
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
});
