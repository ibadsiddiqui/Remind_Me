import React from 'react'
import { View,Text } from 'react-native';
import MainButton from '../../General/MainButton';

export const ModalHeader = (props) => {
    const { triggerModal } = props
    return (
        <View style={styles.cancelBtnRowContainer}>
            <View style={styles.cancelBtnContainer}>
                <MainButton {...props} triggerModal={() => triggerModal()} />
            </View>
        </View>
    )
}

export const ModalHeading = () => {
    return (
        <View style={styles.headingRowContainer}>
            <View style={styles.headingContainer}>
                <Text style={styles.addTaskHeading}>Add new tasks</Text>
            </View>
        </View>
    )
}
const styles = {
    addTaskHeading: {
        fontSize: 13,
        fontFamily: "rubik-medium",
        textAlign: 'center'
    },
    cancelBtnRowContainer: {
        flex: 0.75,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    cancelBtnContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    headingRowContainer: {
        flex: 0.25,
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    headingContainer: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'center'
    },
}