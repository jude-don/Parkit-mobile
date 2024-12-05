import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./navigation/AppStackNavigation";
import * as SplashScreen from 'expo-splash-screen';
import {
    useFonts,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
import {DefaultTheme, PaperProvider} from "react-native-paper";
import AppColors from "./assets/colors";
import {AppProvider} from "./context/AppContext";


export default function App() {
    const [loaded, error] = useFonts({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic,
    });

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: AppColors.primaryColor,
      accent: AppColors.whiteColor,
      placeholder: AppColors.placeholderColor,
      text: AppColors.whiteColor, // Input text color
    },
  };

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
            } catch (e) {
                console.warn(e);
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <PaperProvider theme={MyTheme}>
            <AppProvider>
            <NavigationContainer>
                <AppStack/>
            </NavigationContainer>
            </AppProvider>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
