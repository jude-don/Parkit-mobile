import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator";
import Onboarding from "../ui/screeens/Onboarding";
import Register from "../ui/screeens/Register";
import Login from "../ui/screeens/Login";
import Home from "../ui/screeens/Home";
import AvailableSpots from "../ui/screeens/availablespots/AvailableSpots";
import YourSpot from "../ui/screeens/yourSpot/YourSpot";
import EndSession from "../ui/screeens/yourSpot/EndSession";
import PaymentPortal from "../ui/screeens/payment/PaymentPortal";
import PaymentConfirmation from "../ui/screeens/payment/PaymentConfirmation";


const Stack = createStackNavigator();


const AppStack =() =>(
    <Stack.Navigator
        initialRouteName="Onboarding Screen"
        id="MainStack"
    >
        <Stack.Screen
            name="Onboarding Screen"
            component={Onboarding}
            //component={AppPatientTabsNavigation}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Create Account Screen"
            component={Register}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Login Screen"
            component={Login}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Home Screen"
            component={Home}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Available Spots Screen"
            component={AvailableSpots}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Your Parked Spot Screen"
            component={YourSpot}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="End Session Screen"
            component={EndSession}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Payment Portal Screen"
            component={PaymentPortal}
            options={{
                headerShown: false }}
        />
        <Stack.Screen
            name="Payment Confirmation Screen"
            component={PaymentConfirmation}
            options={{
                headerShown: false }}
        />


    </Stack.Navigator>
);

export default AppStack;