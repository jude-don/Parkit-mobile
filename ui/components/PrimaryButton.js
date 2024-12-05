import {Pressable, StyleSheet} from "react-native";
import Dimensions from "../../assets/dimensions";
import AppColors from "../../assets/colors";


export default function PrimaryButton({children, onClick, bgColor, disabled}) {
    const backgroundColor = bgColor || AppColors.primaryColor;
    const disabledBool = disabled || false

    const styles = StyleSheet.create({
        button: {
            paddingVertical: Dimensions.buttonPaddingVertical,
            paddingHorizontal: Dimensions.buttonPaddingHorizontal,
            borderRadius: Dimensions.buttonCornerRadius,
            backgroundColor: !disabledBool ? backgroundColor: AppColors.midGray,
            justifyContent:'center',
            shadowColor: '#171717',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            shadowRadius: 1.5,
            alignItems:'center'
        },
    });

    return (
        <Pressable
            onPress={onClick} style={styles.button}
            disabled={disabledBool}
        >
            {children}
        </Pressable>
    );
}
