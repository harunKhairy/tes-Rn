import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({whenPress, children}) => {

    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={whenPress}
        >
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 10
    }
}

export default Button