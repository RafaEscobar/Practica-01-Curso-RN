import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TresScreen = () => {
  return (
    <View style={ styles.container }>
        {/* Es posible usar la propiedad -aling-Itmes- sin mencionar a -flex:1- siempre y cuando el elemento en cuestion este dentro de un contenedor, ya que dicho contenedor es al que se le aplica esa propiedad*/}
        <View style={{ alignItems: 'flex-end' }}>
            {/* CAJA 1 */}
            <View style={ styles.box1 }></View>
        </View>
        {/* CAJA 2 */}
        <View style={ styles.box2 }></View>
        <View style={{ alignItems: 'center' }}>
            {/* CAJA 3 */}
            <View style={ styles.box3 }></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: 'aqua',
        justifyContent: 'center',
        
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderBottomColor: 'black',
        
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 6,
        borderBottomColor: 'black',
        alignItems: 'flex-start'

    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderBottomColor: 'black',

    },


});