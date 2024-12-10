import {ActivityIndicator, FlatList, Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import AppColors from "../../../assets/colors";
import LocationSvg from "../../../assets/icons/LocationSvg";
import HorizontalSpacer from "../../components/HorizontalSpacer";
import AppStrings from "../../../assets/strings";
import VerticalSpacer from "../../components/VerticalSpacer";
import PrimaryButton from "../../components/PrimaryButton";
import ParkingSpotItem from "./ParkSpotItem";
import axios from "axios";
import {useState} from "react";

export default function YourSpot({route, navigation}) {
    const {parkingOption, spotId, data} = route.params;
    const [loading, setLoading] = useState(false); // Initialize as false

    const recordParking = async () => {
        setLoading(true); // Show loader before API call
        try {
            const response = await axios.put(
                `https://m0gq6dwzaf.execute-api.us-east-1.amazonaws.com/dev/Parking/${spotId}`
            );

            // Validate the response payload
            if (response.data && response.data.message === "User assigned to parking spot successfully.") {
                // Navigate to the next screen after API call success
                navigation.navigate("End Session Screen", { parkingOption, spotId, data });
            } else {
                console.error("Unexpected API response:", response.data);
                alert("Failed to assign parking spot. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("An error occurred while assigning the parking spot. Please try again.");
        } finally {
            setLoading(false); // Hide loader after API call
        }
    };



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={AppColors.primaryBgColor} barStyle="light-content" />
            <View style={styles.topAppBarContainer}>
                <View style={styles.upperSectionTopAppBar}>
                    <LocationSvg />
                    <HorizontalSpacer width={10} />
                    <View style={styles.textSection}>
                        <Text style={styles.locationText}>{AppStrings.location}</Text>
                        <Text style={styles.placeText}>{parkingOption}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.selectSpotText}>
                    {AppStrings.reservedSpotInfo} {spotId}
                </Text>
                <VerticalSpacer height={30} />
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={styles.itemContainer}>
                            <ParkingSpotItem
                                isAvailable={item.isAvailable} // Pass isAvailable from the data
                                spotID={item.SpotID} // Pass SpotID from the data
                                spotId={spotId} // Current selected spot from context
                            />
                        </View>
                    )}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />
                <View style={styles.buttonContainer}>
                    {loading ? (
                        <ActivityIndicator size="large" color={AppColors.primaryColor} />
                    ) : (
                        <PrimaryButton
                            onClick={
                            () =>
                            {
                                recordParking()
                            }
                        }
                            disabled={spotId === ""}
                        >
                            <Text style={styles.buttonText}>
                                {AppStrings.yourSpotButtonText}
                            </Text>
                        </PrimaryButton>
                    )}
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
        flexGrow: 1,
        paddingHorizontal: 20,
        backgroundColor: AppColors.primaryBgColor,
        paddingTop: 20,
    },
    topAppBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderTopColor: "transparent",
        borderColor: AppColors.appBarColor,
        borderWidth: 0.5,
    },
    upperSectionTopAppBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textSection: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    selectSpotText: {
        fontSize: 16,
        fontWeight: "600",
        color: AppColors.whiteColor,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
    },
    locationText: {
        fontSize: 10,
        fontFamily: "Lato_400Regular",
        color: AppColors.placeholderColor,
        textAlign: "left",
        fontWeight: "600",
    },
    placeText: {
        color: AppColors.whiteColor,
        textAlign: "left",
        fontFamily: "Lato_400Regular",
        fontWeight: "600",
        fontSize: 12,
    },
    availableSpotsText: {
        color: AppColors.whiteColor,
        textAlign: "right",
        fontFamily: "Lato_400Regular",
        fontWeight: "600",
        fontSize: 14,
    },
    buttonContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 20,
        right: 0,
        paddingBottom: Platform.OS === "android" ? 50 : 0,
    },
    buttonText: {
        color: AppColors.whiteColor,
        textAlign: "center",
        fontFamily: "Lato_400Regular",
        fontWeight: "500",
    },
    columnWrapper: {
        justifyContent: "space-between",
    },
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
    },
});
