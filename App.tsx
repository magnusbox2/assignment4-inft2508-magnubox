import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HelloWorld = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.text, { fontFamily: "Copperplate" }]}>Box's Grill</Text>
      </View>

      {/* Main area */}
      <View style={styles.main}>
        <View style={styles.infoBox}>
          <Text style={[styles.text, styles.infoTitle]}>Velkommen til Box's Grill</Text>
          <Text style={[styles.text, styles.infoSubtitle]}>Moderne grillkjøkken i hjertet av byen.</Text>
          <Text style={[styles.text, styles.infoDetail]}>Adresse: Strandgata 12</Text>
          <Text style={[styles.text, styles.infoDetail]}>Telefon: 55 55 55 55</Text>
          <Text style={[styles.text, styles.infoDetail]}>I dag: 11:00-22:00</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>book bord</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>See meny</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>See våre åpningstider</Text>
        </View>
      </View>
    </View>
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
  infoBox: {
    flex: 2,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 16,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: "#1a1a1a",
  },
  infoTitle: {
    fontSize: 22,
    marginBottom: 6,
  },
  infoSubtitle: {
    opacity: 0.9,
    marginBottom: 12,
  },
  infoDetail: {
    opacity: 0.8,
    marginBottom: 4,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default HelloWorld;
