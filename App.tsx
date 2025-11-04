import React, {useState} from "react";
import { Text, View, StyleSheet, Alert, ScrollView, SectionList} from "react-native";
import  Boks  from "./components/boks";
import  Button  from "./components/button";



const restaurant = () => {
  const initialState = [
  {id: 1, displayText: "Book Bord"},
  {id: 2, displayText: "Se Meny"},
  {id: 3, displayText: "Åpningstider"},
  ];

  const [buttons, setButtons] = useState(initialState);
  const [visablePage, setVisablePage] = useState("main");
  const [items, setItems] = useState ([]);
  

  const showButtonItems = (category) => {
    var data = require("./data/buttons.json");
    if (category == "Åpningstider") {
       setVisablePage("åningstider");
       setItems(data.Åpningstider);
    }
  }
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.text, { fontFamily: "Copperplate" }]}>Box's Grill</Text>
      </View>
      <View style={styles.main}>
        {visablePage === "main" &&
        <ScrollView>
          <Boks />
          { 
            buttons.map((value, index) => { 
                return <Button key={value.id} displayText={value.displayText} showItems={showButtonItems}/>
              }
            )
          }  
        </ScrollView>
        };
        {visablePage === "åningstider" && 
          <View style={{
          paddingTop: 20}}>
            <SectionList 
              sections={items}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                  <View style={{
                    backgroundColor: "orange", 
                    padding: 6, marginVertical: 0, 
                    flexDirection: "row", 
                    justifyContent: "space-between"}}>
                    <Text style={{fontSize: 18}}>{item.dag}</Text>
                    <Text style={{fontSize: 18}}>{item.tid}</Text>
                  </View>
                )}
              renderSectionHeader={({ section: { titel } }) => (
                <View>
                  <Text style={{fontSize: 24, backgroundColor: "orange"}}>{titel}</Text>

                </View>
              )}
            />
        </View>
 
        };
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
