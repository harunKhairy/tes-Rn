import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({headerText}) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30
    }
})

export default Header