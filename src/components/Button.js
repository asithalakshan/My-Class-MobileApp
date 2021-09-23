import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button({ text, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        backgroundColor: '#04799E',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
    }
})