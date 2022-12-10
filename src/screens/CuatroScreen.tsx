import React from 'react'
import { View, StyleSheet } from 'react-native';

export const CuatroScreen = () => {
  return (
    <View style={ styles.container }>
        {/* Se vuelve a usar la propiedad -alingItems- para elementos sin usar -flex:1- gracias a un contenedor individual para cada elemento*/}
        <View style={{alignItems: 'flex-end'}}>
            {/* CAJA 1 */}
            <View style={ styles.box1 }></View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* CAJA 2 */}
            <View style={ styles.box2 }></View>
        </View>
        <View style={{alignItems: 'flex-start'}}>
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
    },
    box1:{
        width: 80,
        height: 80,
        backgroundColor: 'yellow',
        borderWidth: 6,
        borderBottomColor: 'black',
        alignItems: 'flex-end',

    },
    box2:{
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderWidth: 6,
        borderBottomColor: 'black',

    },
    box3:{
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 6,
        borderBottomColor: 'black',
    },

});