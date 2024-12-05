import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AppColors from "../../assets/colors";
import ParkingRateSvg from "../../assets/icons/ParkingRateSvg";
import AppStrings from "../../assets/strings";
import CloseSvg from "../../assets/icons/CloseSvg";

export default function ParkingRateModal({ visible, onClose, onConfirm, spotID }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.subModalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <CloseSvg/>
                    </TouchableOpacity>
                    <ParkingRateSvg />
                    <Text style={styles.modalTitle}>
                        {AppStrings.parkingRateTitle}
                    </Text>

                    <View style={styles.rateContainer}>
                        <View style={styles.rateRow}>
                            <Text style={styles.rateText}>{AppStrings.firstRate}</Text>
                            <Text style={styles.rateText}>{AppStrings.firstRateCharge}</Text>
                        </View>
                        <View style={styles.rateRow}>
                            <Text style={styles.rateText}>{AppStrings.secondRate}</Text>
                            <Text style={styles.rateText}>{AppStrings.secondRateCharge}</Text>
                        </View>
                        <View style={styles.rateRow}>
                            <Text style={styles.rateText}>{AppStrings.thirdRate}</Text>
                            <Text style={styles.rateText}>{AppStrings.thirdRateCharge}</Text>
                        </View>
                        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
                            <Text style={styles.confirmButtonText}>
                                {AppStrings.confirmSpot}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(217, 217, 217, 0.5)",
        paddingHorizontal: 45
    },
    subModalContainer: {
        backgroundColor: "#1E1E1E",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: "Lato_400Regular",
        color: AppColors.whiteColor,
        marginTop: 10,
        paddingBottom:5,
    },
    rateContainer: {
        width: "100%",
        marginTop: 20,
    },
    rateRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    rateText: {
        fontSize: 16,
        color: AppColors.whiteColor,
    },
    confirmButton: {
        marginTop: 20,
        backgroundColor: AppColors.primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    confirmButtonText: {
        color: AppColors.whiteColor,
        fontSize: 16,
        fontFamily: "Lato_400Regular",
        textAlign:'center'
    },
});
