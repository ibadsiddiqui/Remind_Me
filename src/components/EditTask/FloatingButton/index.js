import React from 'react';
import { TouchableOpacity, View, Platform } from 'react-native'
import Colors from '../../../constants/Colors';
import { Feather } from '@expo/vector-icons'
const FloatingButton = (props) => {
    const { onPress, color, check } = props
    if (check)
        return (
            <View style={[styles.container, { left: 10 }]}>
                <TouchableOpacity style={styles.button(color)} onPress={onPress}>
                    <Feather name="x" color={Colors.taskButton} size={30} />
                </TouchableOpacity>
            </View>
        );
    else return (
        <View style={[styles.container, { right: 10 }]}>
            <TouchableOpacity style={styles.button(color)} onPress={onPress}>
                <Feather name="check" color={Colors.white} size={30} />
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        position: 'absolute',
    },
    button: (color) => {
        return {
            alignItems: 'center',
            justifyContent: 'center',
            width: 70 - 15,
            height: 70 - 15,
            borderRadius: 70 / 2,
            backgroundColor: color,
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
}

export default FloatingButton;
