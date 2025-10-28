import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Button = (props) => {
    return (
        <View style={{
            flex: 1,
            borderRadius: 10,
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
            borderWidth: 2,
            borderColor: "white"
            }}>
            <Text style={{ fontSize: 18,
                        fontWeight: "bold",
                        color: "white"}}>
                {props.displayText}
            </Text>
        </View>
    );
};

export default Button;