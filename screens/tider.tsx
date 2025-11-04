import React, {useState} from 'react';
import { View , Text, SectionList, } from 'react-native';




const Åpningstider = ({navigation, route}) => {
    var data = require("../data/buttons.json");
    const [items, setItems] = useState (data.Åpningstider);

    return (
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
    );
}

export default Åpningstider;
