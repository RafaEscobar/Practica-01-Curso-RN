import React from 'react'
import { View, StyleSheet } from 'react-native';

export const DosScreen = () => {
  return (
    <View style={ styles.container }>
        {/* CAJA 1 */}
        <View style={ styles.box1 }></View>
        {/* CAJA 2 */}
        <View style={ styles.box2 }></View>
        {/* CAJA 3 */}
        <View style={ styles.box3 }></View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aqua',
        // Alinea al centro en vertical
        justifyContent: 'center',
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
        // La propiedad with: '100%' si funciona y respeta el ancho de la pantalla.... 
        width: '100%',
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderColor: 'yellow',
    },

});