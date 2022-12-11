import React from 'react'
import { View, StyleSheet } from 'react-native';

export const DiezScreen = () => {
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    box1: {
        width: 80,
        height: 80,
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderColor: 'black'

    },
    box2: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderWidth: 6,
        borderColor: 'black',
        // Espaciado en dirección hacia abajo...
        top: 40,
    },
    box3: {
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderColor: 'black'

    },

});