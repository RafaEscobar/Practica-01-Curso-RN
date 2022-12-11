import React from 'react'
import { View, StyleSheet } from 'react-native';

export const CincoScreen = () => {
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
        // -space-between- permite dar espacio a los elementos en razon del ancho, >> Elementos de inicio y fin pegados a las paredes y los de en meido bien distribuidos
        justifyContent: 'space-between',
    },
    box1: {
        width: 80,
        // Si no hay elementos por debajo que interfieran, abarcara todo el alto, respetando las propias dimensiones del elemento, sin salirse o desbordarse de la pantalla
        height: '100%',
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderBottomColor: 'black',

    },
    box2: {
        width: 80,
        // Si no hay elementos por debajo que interfieran, abarcara todo el alto, respetando las propias dimensiones del elemento, sin salirse o desbordarse de la pantalla
        height: '100%',
        backgroundColor: 'red',
        borderWidth: 6,
        borderBottomColor: 'black',

    },
    box3: {
        width: 80,
        // Si no hay elementos por debajo que interfieran, abarcara todo el alto, respetando las propias dimensiones del elemento, sin salirse o desbordarse de la pantalla
        height: '100%',
        backgroundColor: 'blue',
        borderWidth: 6,
        borderBottomColor: 'black',

    },

});