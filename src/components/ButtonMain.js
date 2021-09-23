import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Const from '../../util/Contstants'

export default function ButtonLogin({ title, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ title }</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        justifyContent: 'center',        
        backgroundColor: Const.blueColor,
        height: 50,
        marginVertical: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})