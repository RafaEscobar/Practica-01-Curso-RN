import React from 'react'
import { View, StyleSheet } from 'react-native';

export const NueveScreen = () => {
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1: {
        width: 80, 
        height: 80,
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderColor: 'black',
        // Espaciado en direccion hacia abajo....
        top: 80,

    },
    box2: {
        width: 80, 
        height: 80,
        backgroundColor: 'red',
        borderWidth: 6,
        borderColor: 'black',
        // Espaciado en direccion a la izquierda...
        left: 80,
    },
    box3: {
        width: 80, 
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderColor: 'black',

    },

});