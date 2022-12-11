import React from 'react'
import { View, StyleSheet } from 'react-native';

export const SieteScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: 'aqua',
        // Permite centrar todos los elementos al centro de la pantalla... sin importar si -flexDirection-
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row'
    },
    box1: {
        width: 80,
        height: 80,
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderColor: 'black',

    },
    box2: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderWidth: 6,
        borderColor: 'black',

    },
    box3: {
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderColor: 'black',

    },

});