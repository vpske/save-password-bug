import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { WelcomeScreen } from "app/screens"
import { DetailsScreen } from "app/screens/DetailsScreen"
import { LoggedInContext } from "app/context/LoggedInContext"


export type AppStackParamList = {
  Welcome: undefined
  Details: undefined
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()


const AppStack = observer(function AppStack() {
  let [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    /*----------------- NOT WORKING EXAMPLE -----------------*/
    <LoggedInContext.Provider value={{
      setLoggedIn: (loggedIn: boolean) => setIsLoggedIn(loggedIn)}}>
      <Stack.Navigator>
        { !isLoggedIn ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : (
          <Stack.Screen name="Details" component={DetailsScreen} />
        )}
      </Stack.Navigator>
    </LoggedInContext.Provider>
    /*----------------- NOT WORKING EXAMPLE -----------------*/


    /*----------------- WORKING EXAMPLE -----------------*/
    /*<LoggedInContext.Provider value={{
      setLoggedIn: (loggedIn: boolean) => setIsLoggedIn(loggedIn)}}>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </LoggedInContext.Provider>*/
      /*----------------- WORKING EXAMPLE -----------------*/
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme} {...props}>
        <AppStack />
    </NavigationContainer>
  )
})
