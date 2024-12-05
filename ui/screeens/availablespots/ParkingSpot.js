import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppColors from "../../../assets/colors";
import VerticalSpacer from "../../components/VerticalSpacer";
import Feather from "@expo/vector-icons/Feather";
import UnavailableSvg from "../../../assets/icons/UnavailableSvg";

export default function ParkingSpot({ isAvailable, spotID, spotId, setSpotId }) {
    // Determine if this spot is selected
    const isChecked = spotId === spotID;

    return (
        <>
            {isAvailable ? (
                <View style={styles.container}>
                    <View style={styles.dashedLine} />
                    <VerticalSpacer height={25} />
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            {
                                backgroundColor: isChecked
                                    ? AppColors.selectedCheckedBoxColor
                                    : "transparent",
                                borderWidth: 0.5,
                                borderColor: isChecked
                                    ? AppColors.selectedCheckedBoxColor
                                    : AppColors.whiteColor,
                            },
                        ]}
                        onPress={() => {
                            // Toggle the spotId: Select or Deselect
                            setSpotId(isChecked ? "" : spotID);
                        }}
                    >
                        {isChecked && (
                            <Feather
                                name="check"
                                size={14}
                                color={AppColors.whiteColor}
                            />
                        )}
                    </TouchableOpacity>
                    <VerticalSpacer height={25} />
                    <View style={styles.dashedLine} />
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
});
