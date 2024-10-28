import "@expo/metro-runtime"
import React from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

SplashScreen.preventAutoHideAsync()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function IgniteApp() {
  return (
    <PaperProvider theme={theme}>
      <App hideSplashScreen={SplashScreen.hideAsync} />
    </PaperProvider>
  )
}

export default IgniteApp
