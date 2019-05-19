import React, { Component } from 'react';
import { TouchableHighlight, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
// import DisplayModal from './../components/Dashboard/DisplayModal';
const SIZE = 80;

const MainButton = (props) => {
    const { triggerModal, modalVisible } = props;
    if (modalVisible === false)
        return (
            <TouchableHighlight
                onPress={() => triggerModal()}
                style={styles.button}
            >
                <Icon name="plus" size={24} color="white" />
            </TouchableHighlight>
        )
    else if (modalVisible === true)
        return (
            modalVisible === true &&
            <TouchableHighlight
                onPress={() => triggerModal()}
                style={styles.button}
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
        elevation: 10
    }
}

export default MainButton;