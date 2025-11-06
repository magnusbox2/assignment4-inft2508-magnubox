import React, {useState, useEffect} from 'react';
import { 
    View, 
    Text,
    Image,
    Pressable
  } from 'react-native';
  import  i18n  from "../translations/i18n.js";

const Meny = ( {navigation, route} ) => {

    const [items, setItems] = useState ([]);

    const getMeny = async () => {
        // call api
        const response = await fetch("https://ciara-unrecitative-blair.ngrok-free.dev/Meny");
        const menyItems = await response.json();
        setItems(menyItems);
    };

    const addItem = async () => {
        const randomNumber = Math.floor(Math.random() * 100);

        // call api
        const response = await fetch("https://ciara-unrecitative-blair.ngrok-free.dev/Meny",
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    id: randomNumber,
                    navn: 'Breadsticks ' ,
                    pris: '50 '
                })
            });
        const foodAdded = await response.json();
        console.log(foodAdded);
    };

    useEffect ( () => {getMeny()}, []);

    const FoodItem = ({food}) => {
        return (
            <View style={{ 
                margin: 5,
                backgroundColor: "#FFDFFD",
                }}>
                <Text> Navn: {food.navn} </Text>
                <Text> Pris: {food.pris} </Text>
            </View>
        );
    };
    const MenyHeader = () => {
        return (
            <View style={{ 
                padding: 5,
                alignItems: "center",
                justifyContent: "center",
                }}>
                <Pressable onPress ={addItem}>
                    <Image 
                        style= {{width: 40, height: 40}} 
                        source={require('../images/plus-sign.png')}
                    />
                </Pressable>
            </View>
        );
    };

    return (
    <View> 
        <MenyHeader/>
        {
            items.map((value, index) => {
                    return <FoodItem key={value.id} food={value}/>
                }
            )
        }
        
    </View>
    );
}

export default Meny;
