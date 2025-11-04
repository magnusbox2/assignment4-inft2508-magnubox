import React from "react";
import { Text, View, Pressable, TouchableOpacity, Alert } from "react-native";

const Button = (props) => {

    const OnButtonPress = () => {
        props.showItems(props.displayText);
    }

    return (
        <Pressable onPress = {OnButtonPress}>
            <View style={{
                height: 150,
                width: "100%",
                borderRadius: 10,
                backgroundColor: "orange",
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
                    {props.displayText}
                </Text>
            </View>
        </Pressable>
    );
};

export default Button;
