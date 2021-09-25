import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Const from '../../util/Contstants'

export default function Button({ title, onPress, styless }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styless}>
                <Text style={styles.buttonText}>{ title }</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    }
})