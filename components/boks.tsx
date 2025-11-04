import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Boks = () => {
    return (
        <View style={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 10,
            padding: 16,
            marginTop: 8,
            marginBottom: 16,
            backgroundColor: "#1a1a1a"}}>
            <Text style={{fontSize: 22,
                 fontWeight: "bold",
                color: "white",
                marginBottom: 6,}}>
                Velkommen til Box's Grill
            </Text>
            <Text style={{fontSize: 18,
                fontWeight: "bold",
                color: "white"}}>
                Moderne grillkjøkken i hjertet av byen.
            </Text>
            <Text style={{fontSize: 18,
                fontWeight: "bold",
                color: "white"}}>
                Adresse: Strandgata 12
            </Text>
            <Text style={{fontSize: 18,
                fontWeight: "bold",
                color: "white"}}>
                Telefon: 55 55 55 55
            </Text>
        </View>
    );
};

export default Boks;
