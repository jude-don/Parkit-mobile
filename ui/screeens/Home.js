import { useState } from "react";
import { Platform, Pressable, StatusBar, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import AppColors from "../../assets/colors";
import ParkItLogoSmallSvg from "../../assets/icons/ParkItLogoSmallSvg";
import HorizontalSpacer from "../components/HorizontalSpacer";
import AppStrings from "../../assets/strings";
import Notifications from "../../assets/icons/Notifications";
import { SearchBar } from "react-native-elements";
import NavigationSvg from "../../assets/icons/NavigationSvg";
import * as Location from "expo-location";

export default function Home({ navigation }) {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState(null);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    // Mock Parking Data
    const parkingData = [
        "Z Park Garage A",
        "Comerica Garage",
        "700 Randolph St Parking",
        "Trolley Plaza",
        "SP+ Parking",
    ];

    // Function to get the user's current location
    const getLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied.");
                alert("Permission to access location was denied.");
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
            alert(`Latitude: ${currentLocation.coords.latitude}, Longitude: ${currentLocation.coords.longitude}`);
        } catch (error) {
            console.error("Error fetching location:", error);
            alert("Failed to fetch location.");
        }
    };

    // Function to handle search input and filter results
    const handleSearch = (text) => {
        setSearch(text);
        if (text) {
            const filtered = parkingData.filter((option) =>
                option.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredOptions(filtered);
        } else {
            setFilteredOptions([]);
        }
    };

    // Function to handle option selection
    const handleOptionSelect = (option) => {
        setSearch(option);
        setFilteredOptions([]);
        navigation.navigate("Available Spots Screen", { parkingOption: option });
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={AppColors.primaryBgColor} barStyle="light-content" />
            <View style={styles.topAppBarContainer}>
                <View style={styles.topAppBarLeftContainer}>
                    <ParkItLogoSmallSvg />
                    <HorizontalSpacer width={10} />
                    <Text style={styles.titleText}>{AppStrings.parkIt}</Text>
                </View>
                <Notifications />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.locationContainer}>
                    <View style={styles.searchContainer}>
                        <SearchBar
                            placeholder={AppStrings.searchEntryBox}
                            onChangeText={handleSearch}
                            value={search}
                            platform="default"
                            searchIcon={{ size: 24 }}
                            lightTheme={false}
                            round={true}
                            containerStyle={{
                                backgroundColor: AppColors.primaryBgColor,
                                borderBottomWidth: 0,
                                borderTopWidth: 0,
                                shadowColor: "transparent",
                                elevation: 0,
                                borderColor: AppColors.whiteColor,
                            }}
                            inputStyle={{
                                fontSize: 14,
                                fontFamily: "Lato_400Regular",
                                color: AppColors.whiteColor,
                            }}
                        />
                    </View>
                    <Pressable onPress={getLocation}>
                        <NavigationSvg />
                    </Pressable>
                </View>

                {/* Display Filtered Results */}
                {filteredOptions.length > 0 && (
                    <FlatList
                        data={filteredOptions}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => handleOptionSelect(item)}
                            >
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
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
    topAppBarLeftContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    titleText: {
        fontSize: 18,
        fontFamily: "Lato_400Regular",
        color: AppColors.whiteColor,
        textAlign: "left",
        fontWeight: "600",
    },
    locationContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    searchContainer: {
        flex: 1,
    },
    option: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.whiteColor,
    },
    optionText: {
        fontSize: 14,
        color: AppColors.whiteColor,
        fontFamily: "Lato_400Regular",
    },
});
