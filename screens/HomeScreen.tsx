import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, ScrollView, SectionList} from "react-native";
import  Boks  from "../components/boks";
import  Button  from "../components/button";



const HomeScreen = ( {navigation} ) => {
  const initialState = [
  {id: 1, displayText: "Bord"},
  {id: 2, displayText: "Meny"},
  {id: 3, displayText: "Åpningstider"},
  ];

  const [buttons, setButtons] = useState(initialState);
  

  const showButtonItems = (category) => {
    if (category == "Meny") {
       navigation.navigate("Meny", {selectedCategory : category});
    }else if (category == "Åpningstider") {
       navigation.navigate("Åpingstider", {selectedCategory : category});
    }else if (category == "Bord") {
       navigation.navigate("Bord", {selectedCategory : category});
    }
    } 
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.text, { fontFamily: "Copperplate" }]}>Box's Grill</Text>
      </View>
      <View style={styles.main}>
        <ScrollView>
          <Boks />
          { 
            buttons.map((value, index) => { 
                return <Button key={value.id} displayText={value.displayText} showItems={showButtonItems}/>
              }
            )
          }  
        </ScrollView>
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

export default HomeScreen;