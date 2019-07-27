import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { toggleTimePicker } from '../../../helpers/pickerhelpers';
import Layout from '../../../constants/Layout';

const TimePicker = (props) => {
    const { taskStartTime } = props
    return (
        <View style={[Layout.tableRow, { paddingHorizontal: 10 }]}>
            <View style={[Layout.tableCell, { flex: 1.25 }]}>
                <Text style={styles.heading}>Start Time: </Text>
            </View>
            <View style={[Layout.tableCell, { flex: 2.25 }]}>
                <TouchableHighlight underlayColor="transparent" onPress={() => toggleTimePicker("start", props)}>
                    <Text style={styles.time}>{taskStartTime === "" ? "00:00 A.M" : taskStartTime}</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight style={[Layout.tableCell, { flex: 0.5 }]}
                onPress={() => toggleTimePicker(props)}
                underlayColor="transparent"
            >
                <View style={{width:50, marginLeft:15}}>
                    <Entypo name="chevron-down" size={20} color="black"
                        style={styles.icon} />
                </View>
            </TouchableHighlight>
            <View style={{ flex: 3 }} />
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
        width: 75,
        textAlign: 'center',
        marginTop: 2,
        marginLeft: 35
    },
    icon: {
        marginLeft: 13,
        top: -2
    }
}

export default TimePicker;