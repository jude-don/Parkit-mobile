import {ActivityIndicator, FlatList, Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import AppColors from "../../../assets/colors";
import LocationSvg from "../../../assets/icons/LocationSvg";
import HorizontalSpacer from "../../components/HorizontalSpacer";
import AppStrings from "../../../assets/strings";
import VerticalSpacer from "../../components/VerticalSpacer";
import ParkingSpotItem from "./ParkSpotItem";
import PrimaryButton from "../../components/PrimaryButton";
import ParkedSpot from "./ParkedSpot";
import {useContext, useState} from "react";
import {AppContext} from "../../../context/AppContext";
import axios from "axios";

export default function EndSession({route, navigation}) {
    const {parkingOption, spotId, data} = route.params;
    const {setSpotId} = useContext(AppContext);
    const [amount, setAmount] = useState(0); // Initialize amount as state
    const [loading, setLoading] = useState(false); // Initialize loading as false

    const endParking = async () => {
        setLoading(true); // Show loader
        try {
            const response = await axios.get(
                `https://m0gq6dwzaf.execute-api.us-east-1.amazonaws.com/dev/Parking/${spotId}`
            );
            setAmount(response.data.finalPrice); // Set the amount
            setSpotId(""); // Clear the spotId
            navigation.navigate("Payment Portal Screen", {amount: amount.toString()}); // Navigate to payment screen with amount
        } catch (error) {
            console.error("Error ending parking session:", error);
        } finally {
            setLoading(false); // Hide loader
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
                    {AppStrings.parkedCarInfo} {spotId}
                </Text>
                <VerticalSpacer height={30} />
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.SpotID}
                    renderItem={({item, index}) => (
                        <View style={styles.itemContainer}>
                            <ParkedSpot
                                isAvailable={item.isAvailable} // Pass isAvailable from the data
                                spotID={item.SpotID} // Pass SpotID from the data
                                spotId={spotId} // Current selected spot from context
                                column={index % 2 === 0 ? "left" : "right"} // Determine column dynamically
                            />
                        </View>
                    )}
                    numColumns={2}
                    columnWrapperStyle={{justifyContent: "space-between"}}
                />
                <View style={styles.buttonContainer}>
                    {loading ? (
                        <ActivityIndicator size="large" color={AppColors.primaryColor} />
                    ) : (
                        <>
                            <PrimaryButton onClick={endParking}>
                                <Text style={styles.buttonText}>
                                    {AppStrings.endParkingSessionBtnText}
                                </Text>
                            </PrimaryButton>
                            <VerticalSpacer height={15} />
                            <PrimaryButton
                                onClick={() => {
                                    console.log("Finding car...");
                                }}
                                bgColor={AppColors.altBtnColor}
                            >
                                <Text style={styles.buttonText}>
                                    {AppStrings.findMyCar}
                                </Text>
                            </PrimaryButton>
                        </>
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
