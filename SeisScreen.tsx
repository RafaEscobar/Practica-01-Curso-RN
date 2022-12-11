import React from 'react'
import { View, StyleSheet } from 'react-native';

export const SeisScreen = () => {
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
    },
    box1: {
        // Al asignar -flex:- a cada uno de los elementos en diferentes dimensiones permite al padre asignar a cada elemento un espacio en razon de la suma de las dimensiones... Ejemplo si hay tres elementos con las dimensiones flex: 2,2,4, queda de la siguiente forma: -> Elemento A 20%, Elemento B 20% y Elemento C 40%
        flex: 2,
        width: '100%',
        height: 80,
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderBottomColor: 'black'
    },
    box2: {
        flex: 2,
        width: '100%',
        height: 80,
        backgroundColor: 'red',
        borderWidth: 6,
        borderBottomColor: 'black'
    },
    box3: {
        flex: 4,
        width: '100%',
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderBottomColor: 'black'
    },

});