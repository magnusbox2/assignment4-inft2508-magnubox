import React, {useState} from "react";
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

export default restaurant;
