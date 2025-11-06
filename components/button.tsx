import React, {useState, useEffect} from "react";
import { Text, View, Pressable, TouchableOpacity, Alert } from "react-native";
import  i18n  from "../translations/i18n.js";

import AsyncStorage from '@react-native-async-storage/async-storage'; 

const Button = (props) => {

    const [preferredCardColor, setPreferredCardColor] = useState('#9FE8FF');

    useEffect( () => {
        updateCardColor();
    }, []);

    const updateCardColor = async() => {
        try {
        const value = await AsyncStorage.getItem('cardbgcolor')
        if(value !== null) {
            setPreferredCardColor(value);
        }
        } catch(e) {
        return null;
        }
    }


    const OnButtonPress = () => {
        props.showItems(props.displayText);
    }

    return (
        <Pressable onPress = {OnButtonPress}>
            <View style={{
                height: 150,
                width: "100%",
                borderRadius: 10,
                backgroundColor: preferredCardColor,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
                borderWidth: 2,
                borderColor: "white",
                paddingHorizontal: 16,
                }}>
                <Text style={{ fontSize: 18,
                            fontWeight: "bold",
                            color: "white"}}>
                    {/* {i18n.t(props.displayText)} */}
                    {props.displayText}

                </Text>
            </View>
        </Pressable>
    );
};

export default Button;
