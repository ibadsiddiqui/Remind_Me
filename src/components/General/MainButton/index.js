import React, { Component } from 'react';
import { TouchableOpacity, Platform, Image } from "react-native";
import Colors from '../../../constants/Colors';
import Images from '../../../assets/images';
const SIZE = 80;

const MainButton = (props) => {
    const { triggerModal, modalVisible, setTaskFlag } = props;
    if (modalVisible === false)
        return (
            <TouchableOpacity style={styles.button} onPress={triggerModal}>
                <Image source={Images.MainButton} />
            </TouchableOpacity>
        )
    else if (modalVisible === true)
        return (
            modalVisible === true &&
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    setTaskFlag('')
                    triggerModal()
                }}
            >
                <Image source={Images.CancelButton} />
            </TouchableOpacity>
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
        width: SIZE - 15,
        height: SIZE - 15,
        borderRadius: SIZE / 2,
        backgroundColor: Colors.taskButton,
        marginBottom: 35,
        ...Platform.select({
            ios: {
                shadowColor: Colors.black,
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