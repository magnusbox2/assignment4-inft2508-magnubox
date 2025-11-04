import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, ScrollView, SectionList} from "react-native";
import  Boks  from "./components/boks";
import  Button  from "./components/button";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import Meny from "./screens/meny";
import Åpningstider from "./screens/tider";
import Bord from "./screens/bord";


const restaurant = () => {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meny" component={Meny} />
        <Stack.Screen name="Åpingstider" component={Åpningstider} />
        <Stack.Screen name="Bord" component={Bord} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 9,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default restaurant;
