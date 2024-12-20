import {useState} from "react";
import {Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import AppColors from "../../assets/colors";
import AppStrings from "../../assets/strings";
import HorizontalSpacer from "../components/HorizontalSpacer";
import VerticalSpacer from "../components/VerticalSpacer";
import ParkItLogoSmallSvg from "../../assets/icons/ParkItLogoSmallSvg";
import {TextInput} from "react-native-paper";
import PrimaryButton from "../components/PrimaryButton";
import {CommonActions} from "@react-navigation/native";

export default function Login({navigation}) {
    const handleButtonClick = () => {
        // TODO: Remove this function once create account button is removed
        console.log('Button Clicked, implement navigation');
    };
    const [email, onChangeEmail] = useState('');
    const [name, onChangeName] = useState('');
    const [password, onChangePassword] = useState('');

    return(
        <View
            style={styles.container}
        >
            <StatusBar
                backgroundColor={AppColors.primaryBgColor}
                barStyle="light-content"
            />
            <View
                style={styles.contentContainer}>
                <View
                    style={styles.titleContainer}
                >
                    <Text
                        style={styles.titleText}
                    >
                        {AppStrings.login}
                    </Text>
                    <HorizontalSpacer width={10}/>
                    <View
                        style={styles.logoContainer}
                    >
                        <VerticalSpacer height={6}/>
                        <ParkItLogoSmallSvg/>
                    </View>
                </View>
                <VerticalSpacer height={70}/>
                <TextInput
                    textColor={AppColors.whiteColor}
                    mode='outlined'
                    label={AppStrings.emailLogin}
                    placeholder={AppStrings.emailLogin}
                    value={email}
                    onChangeText={email => onChangeEmail(email)}
                    style={styles.input}
                    activeOutlineColor={AppColors.primaryColor}
                    outlineColor={AppColors.whiteColor}
                    keyboardType='email-address'
                    placeholderTextColor={AppColors.placeholderColor}
                    returnKeyType='next'
                    autoFocus={true}
                />
                <VerticalSpacer height={20}/>
                <TextInput
                    mode='outlined'
                    label={AppStrings.passwordLogin}
                    value={password}
                    placeholder={AppStrings.passwordLogin}
                    onChangeText={password=> onChangePassword(password)}
                    activeOutlineColor={AppColors.primaryColor}
                    outlineColor={AppColors.whiteColor}
                    keyboardType='default'
                    autoCorrect={false}
                    autoCapitalize='none'
                    spellCheck={false}
                    secureTextEntry={true}
                    style={styles.input}
                    textColor={AppColors.whiteColor}
                    placeholderTextColor={AppColors.placeholderColor}
                    returnKeyType='done'
                />
                <VerticalSpacer height={15}/>
                <Text
                    style={styles.signInText}
                    onPress={
                        ()=>{
                            navigation.dispatch(
                                CommonActions.reset({
                                    index: 0, // Index of the active route in the new stack
                                    routes: [
                                        { name: 'Create Account Screen' }, // The screen to navigate to
                                    ],
                                })
                            );
                        }
                }
                >
                    {AppStrings.registerText}
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
                    }
                                   disabled={email===""|| password==="" }
                    >
                        <Text style={styles.buttonText}>
                            {AppStrings.login}
                        </Text>
                    </PrimaryButton>
                </View>
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
    contentContainer: {
        flex: 1,
        paddingHorizontal:20,
        backgroundColor: AppColors.primaryBgColor,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 50 : 0,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30,
        fontFamily: 'Lato_400Regular',
        color: AppColors.whiteColor,
        textAlign:'left',
        fontWeight: 600,

    },
    input:{
        fontFamily: 'Lato_400Regular',
        backgroundColor: AppColors.primaryBgColor,
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
    signInText:{
        color: AppColors.whiteColor,
        textAlign: 'right',
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Lato_400Regular'
    },
    logoContainer:{
        alignSelf:'center'
    }
})