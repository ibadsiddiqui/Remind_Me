import React, { Component } from 'react';
import { TouchableHighlight, Platform } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
const SIZE = 80;

const MainButton = (props) => {
    const { triggerModal, modalVisible, setTaskFlag } = props;
    if (modalVisible === false)
        return (
            <TouchableHighlight style={styles.button} onPress={triggerModal}>
                <Icon name="plus" size={24} color="white" />
            </TouchableHighlight>
        )
    else if (modalVisible === true)
        return (
            modalVisible === true &&
            <TouchableHighlight style={styles.button}
                onPress={() => {
                    setTaskFlag('')
                    triggerModal()
                }}
            >
                <Entypo name="cross" size={30} color="white" />
            </TouchableHighlight>
        )
}

const styles = {
    container: {
        position: 'absolute',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZE - 20,
        height: SIZE - 20,
        borderRadius: SIZE / 2,
        backgroundColor: Colors.taskButton,
        marginBottom: 50,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2.5 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 10,
            },
            android: {
                elevation: 10
            }
        })
    }
}

export default MainButton;