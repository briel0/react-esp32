import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles.js'

import React, { useState } from 'react';

import BluetoothSerial from 'react-native-bluetooth-serial-next';

const callChange = async(value) => {
    try{
        await BluetoothSerial.write(value);
        console.log('Comando enviado');
    }
    catch(e){
        console.log('Erro ao enviar');
  }
};

function App() {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        const nextState = !isActive; 
        setIsActive(nextState);
        callChange(nextState ? '1' : '0');
    };

    return (

    <View style = {styles.container}>
      <StatusBar barStyle = "dark-content" />

        <TouchableOpacity 
        style = {[styles.modernButton, {backgroundColor: isActive ? '#8B8BAE' : '#00D1FF'}]}
        onPress={handlePress}>

            <Text style = {styles.buttonText} >{isActive ? 'Desligar' : 'Ligar'}</Text>
            
        </TouchableOpacity>

    </View>
  );
}

export default App
