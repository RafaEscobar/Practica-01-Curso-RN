import React from 'react'
import { StyleSheet, View } from 'react-native'

export const UnoScreen = () => {
  return (
    <View style={ styles.container }>
        {/* CAJA 1 */}
        <View style={styles.box1}></View>
        {/* CAJA 2 */}
        <View style={styles.box2}></View>
        {/* CAJA 3 */}
        <View style={styles.box3}></View>
        
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: 'aqua',
        
    },

    box1:{
        width: 80,
        height: 80,
        backgroundColor: 'yellow',
        borderWidth: 7,
        borderColor: 'black'
    },
    box2:{
        // Asignarle la propiedad -flex:1- a un componente hara que se expanda... ocupando el espacio restante pero respentando el tamaño de los demas componentes... 
        flex: 1,
        width: 80,
        height: 80,
        backgroundColor: 'red',
        borderWidth: 7,
        borderColor: 'black'
    },
    box3:{
        width: 80,
        height: 80,
        backgroundColor: 'blue',
        borderWidth: 7,
        borderColor: 'black'
    },

});