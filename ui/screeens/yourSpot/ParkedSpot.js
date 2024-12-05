import { View, StyleSheet, Image } from "react-native";
import AppColors from "../../../assets/colors";
import VerticalSpacer from "../../components/VerticalSpacer";
import UnavailableSvg from "../../../assets/icons/UnavailableSvg";

export default function ParkedSpot({ isAvailable, spotID, spotId, column }) {
    const isChecked = spotId === spotID;


    // Determine the image to use based on the column
    const imageSource =
        column === "right"
            ? require("../../../assets/images/parked-car-right.png")
            : require("../../../assets/images/parked-car-left.png");

    return (
        <>
            {isAvailable ? (
                <View style={styles.container}>
                    <View
                        style={[
                            styles.dashedLine,
                            { borderColor: isChecked ? AppColors.greenHighlight : AppColors.whiteColor },
                        ]}
                    />
                    <VerticalSpacer height={5} />

                    {/* Car Image or Available Spot */}
                    {isChecked ? (
                        <Image
                            source={imageSource} // Use dynamically selected image
                            style={styles.image}
                            resizeMode="contain"
                        />
                    ) : (
                        <View
                            style={[
                                styles.availableContainer,
                                { backgroundColor: AppColors.primaryBgColor },
                            ]}
                        />
                    )}

                    <VerticalSpacer height={5} />
                    <View
                        style={[
                            styles.dashedLine,
                            { borderColor: isChecked ? AppColors.greenHighlight : AppColors.whiteColor },
                        ]}
                    />
                </View>
            ) : (
                <View style={styles.container}>
                    <View style={styles.dashedLine} />
                    <VerticalSpacer height={5} />

                    {/* Unavailable Spot */}
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
        width: 130, // Container width matches the slot size
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    dashedLine: {
        width: 130, // Matches container width
        height: 1, // Line thickness
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: AppColors.whiteColor,
    },
    availableContainer: {
        width: 120,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 120, // Scaled width
        height: 60, // Scaled height
        alignSelf: "center",
    },
    unavailableContainer: {
        width: 130,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: AppColors.unavailableSpotColor,
    },
});
