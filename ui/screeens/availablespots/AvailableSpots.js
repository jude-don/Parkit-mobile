import {ActivityIndicator, FlatList, Platform, StatusBar, StyleSheet, Text, View} from "react-native";
import AppColors from "../../../assets/colors";
import LocationSvg from "../../../assets/icons/LocationSvg";
import HorizontalSpacer from "../../components/HorizontalSpacer";
import AppStrings from "../../../assets/strings";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import VerticalSpacer from "../../components/VerticalSpacer";
import PrimaryButton from "../../components/PrimaryButton";
import ParkingSpot from "./ParkingSpot";
import {AppContext} from "../../../context/AppContext";
import ParkingRateModal from "../ParkingRateModal";

export default function AvailableSpots({ route, navigation }) {
    const { parkingOption } = route.params;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { spotId, setSpotId } = useContext(AppContext);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        // Fetch data from API
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://m0gq6dwzaf.execute-api.us-east-1.amazonaws.com/dev/Parking");
            setData(response.data); // Ensure response.data is an array
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleReserveSpotClick = () =>{
        setModalVisible(true)
    };
    const handleConfirmSpot = () => {
        setModalVisible(false);
        navigation.navigate("Your Parked Spot Screen", {parkingOption ,spotId, data }); // Replace "NextPage" with your target screen name
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={AppColors.primaryBgColor} barStyle="light-content" />
            {loading ? (
                <ActivityIndicator size="large" color={AppColors.primaryColor} />
            ) : (
                <>
                    <View style={styles.topAppBarContainer}>
                        <View style={styles.upperSectionTopAppBar}>
                            <LocationSvg />
                            <HorizontalSpacer width={10} />
                            <View style={styles.textSection}>
                                <Text style={styles.locationText}>{AppStrings.location}</Text>
                                <Text style={styles.placeText}>{parkingOption}</Text>
                            </View>
                        </View>
                        <Text style={styles.availableSpotsText}>
                            {AppStrings.availableSpots} {data.length.toString()}
                        </Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.selectSpotText}>{AppStrings.selectSpot}</Text>
                        <VerticalSpacer height={30} />
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) =>(
                                <View style={styles.itemContainer}>
                                    <ParkingSpot
                                        isAvailable={item.isAvailable} // Pass isAvailable from the data
                                        spotID={item.SpotID} // Pass SpotID from the data
                                        spotId={spotId} // Current selected spot from context
                                        setSpotId={setSpotId} // Context setter for the selected spot
                                    />
                                </View>
                            )}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: "space-between" }}
                        />
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onClick={
                                ()=> {
                                    handleReserveSpotClick()
                                }

                            } disabled={spotId === ""}>
                                <Text style={styles.buttonText}>
                                    {AppStrings.reserveSpot}
                                </Text>
                            </PrimaryButton>
                        </View>
                    </View>
                </>
            )}
            <ParkingRateModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={handleConfirmSpot}
                spotID={spotId}
            />
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
    option: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: AppColors.whiteColor,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
    optionText: {
        fontSize: 14,
        color: AppColors.whiteColor,
        fontFamily: "Lato_400Regular",
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
    columnWrapper: {
        justifyContent: "space-between",
    },
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding:0
    },
});
