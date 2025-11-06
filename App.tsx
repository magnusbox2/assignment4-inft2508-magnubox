import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import Meny from "./screens/meny";
import Åpningstider from "./screens/tider";
import Bord from "./screens/bord";
import SettingsIcon from "./components/settingsIcon";
import SettingsScreen from "./screens/settings";


const restaurant = () => {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options= { ({navigation}) => ({
            headerRight: () => (<SettingsIcon navigation={navigation}/>)
          })}
          />
        <Stack.Screen name="Meny" component={Meny} />
        <Stack.Screen name="Åpingstider" component={Åpningstider} />
        <Stack.Screen name="Bord" component={Bord} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default restaurant;
