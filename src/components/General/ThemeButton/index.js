import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors';
const ThemeButton = (props) => {
    const { onPress, title } = props;
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.getStartedBtn} onPress={onPress}>
                <Text style={styles.getStartedText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    btnContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 120,
        marginBottom: 20
    },
    getStartedBtn: {
        width: 258,
        height: 52,
        backgroundColor: Colors.onboardingBtnBackground,
        justifyContent: 'center',
        borderRadius: 10
    },
    getStartedText: {
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: "opensans-regular",
        fontWeight: '700'
    },
}

export default ThemeButton;