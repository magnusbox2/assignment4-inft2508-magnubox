import React from 'react';
import {
  View, 
  Pressable,
  Image
 } from 'react-native';

 const SettingsIcon = (props) => {

    const onSettingsIconPress = () => {
        props.navigation.navigate('SettingsScreen');
       }
       
       return (
        <Pressable onPress={onSettingsIconPress}>
            <View>
                <Image
                style= {{width: 20, height: 20, marginRight: 20}}
                source={require('../images/logo-settings.png')}
                />
            </View>
      </Pressable>
       );
 }

 export default SettingsIcon;
