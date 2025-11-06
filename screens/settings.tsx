import React, { useState } from 'react';
import { Alert } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const SettingsScreen = ( {navigation, route} ) => {

    // set default color for the color picker
    const [cardbgcolor, setCardbgcolor] = useState ('#416fff');
    
    // on color change, persist it
    const onColorChangeComplete = async (color) =>{
        try {
            await AsyncStorage.setItem('cardbgcolor', color)
        } catch (e) {
            console.error('Failed to persist cardbgcolor', e);
            Alert.alert('Save failed', 'Could not save your color. Please try again.');
        }
    }

    return (
        <ColorPicker
            color={cardbgcolor}
            onColorChangeComplete={onColorChangeComplete}
            style= {{margin: 20}}
        />
    );

}

export default SettingsScreen;
