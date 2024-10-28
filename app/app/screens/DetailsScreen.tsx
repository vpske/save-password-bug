import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppStackScreenProps } from "../navigators"
import { View, StyleSheet, Text } from "react-native"

interface WelcomeScreenProps extends AppStackScreenProps<"Details"> {}

export const DetailsScreen: FC<WelcomeScreenProps> = observer(function DetailsScreen(
) {

  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
    </View>
  )
})

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
