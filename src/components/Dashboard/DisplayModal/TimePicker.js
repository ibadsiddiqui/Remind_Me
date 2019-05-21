import React from 'react'
import { View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';



const TimePicker = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Time: </Text>
            <Text style={styles.time}>19:00 — 21:00 </Text>
            <Entypo
                name="chevron-down"
                size={20} color="black"
                style={styles.icon} />
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    heading: {
        textAlign: 'center',
        fontFamily: "rubik-regular",
        fontSize: 13,
        marginTop: 2
    },
    time: {
        fontFamily: "rubik-medium",
        fontSize: 13,
        textAlign: 'center',
        marginTop: 2,
        marginLeft: 22
    },
    icon: {
        marginLeft: 13,
        top: -2
    }
}

export default TimePicker;