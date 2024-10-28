import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppStackScreenProps } from "../navigators"
import { View, StyleSheet, Text, TextInput } from "react-native"
import { Button } from "react-native-paper"
import { LoggedInContext } from "app/context/LoggedInContext"
import { useNavigation } from "@react-navigation/native"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {
}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer (function WelcomeScreen () {
  const loggedOut = React.useContext(LoggedInContext);
  const navigation = useNavigation()
  const login = () => {
    /*----------------- NOT WORKING EXAMPLE -----------------*/
    loggedOut.setLoggedIn(true);
    /*----------------- NOT WORKING EXAMPLE -----------------*/
    
    /*----------------- WORKING EXAMPLE -----------------*/
    //navigation.navigate("Details");
    /*----------------- WORKING EXAMPLE -----------------*/
  }
  return (
    <View> 
      <TextInput style={style.input} autoComplete="username" placeholder="Username" /> 
      <TextInput style={style.input} autoComplete="password" placeholder="Password" secureTextEntry />
      <Button onPress={login} mode={"outlined"}> 
        "Login"
      </Button> 
    </View>)
})
const style = StyleSheet.create ({
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
}) 