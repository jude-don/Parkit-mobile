import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppColors from "../../../assets/colors";
import VerticalSpacer from "../../components/VerticalSpacer";
import Feather from "@expo/vector-icons/Feather";
import UnavailableSvg from "../../../assets/icons/UnavailableSvg";

export default function ParkingSpotItem({isAvailable, spotID, spotId}) {
    const isChecked = spotId === spotID;

    return (
        <>
            {isAvailable ? (
                <View style={styles.container}>
                    <View style={[styles.dashedLine,{borderColor: isChecked ? AppColors.greenHighlight : AppColors.whiteColor}]} />
                    <VerticalSpacer height={5} />
                    <View style={[styles.availableContainer, {backgroundColor: isChecked ? AppColors.greenHighlight : AppColors.primaryBgColor}]} />
                    <VerticalSpacer height={5} />
                    <View style={[styles.dashedLine,{borderColor: isChecked ? AppColors.greenHighlight : AppColors.whiteColor}]}  />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.dashedLine} />
                    <VerticalSpacer height={5} />
                    <View style={styles.unavailableContainer}>
                        <UnavailableSvg />
                    </View>
                    <VerticalSpacer height={5} />
                    <View style={styles.dashedLine} />
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    dashedLine: {
        width: 130,
        height: 1,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: AppColors.whiteColor,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 100, // Circular shape
        alignItems: "center",
        justifyContent: "center",
    },
    unavailableContainer: {
        flexDirection: "column",
        width: 130,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.unavailableSpotColor,
    },
    availableContainer: {
        width: 120,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
});
