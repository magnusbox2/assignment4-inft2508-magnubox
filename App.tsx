import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import  Boks  from "./components/boks";
import  Button  from "./components/button";



const restaurant = () => {
  const initialState = [
  {id: 1, displayText: "Book Bord"},
  {id: 2, displayText: "Se Meny"},
  {id: 3, displayText: "Se Våre Åpningstider"},
  ];

  const [buttons, setButtons] = useState(initialState);
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.text, { fontFamily: "Copperplate" }]}>Box's Grill</Text>
      </View>
      <View style={styles.main}>
        <Boks />
        { 
          buttons.map((value, index) => { 
              return <Button key={value.id} displayText={value.displayText} />
            }
          )
        }  
        {/* <Button displayText= "Book Bord"/>
        <Button displayText= "Se Meny"/>
        <Button displayText= "See Våre Åpningstider"/> */}
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default restaurant;
