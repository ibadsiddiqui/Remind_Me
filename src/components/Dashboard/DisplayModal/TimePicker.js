import React from 'react'
import { View, Text, TouchableHighlight, Dimensions } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { toggleTimePicker } from '../../../helpers/pickerhelpers';
import Layout from '../../../constants/Layout';

const TimePicker = (props) => {
    const { taskStartTime } = props
    return (
        <View style={[Layout.tableRow, { paddingHorizontal: 10 }]}>
            <View style={[Layout.tableCell, { flex: 1.4 }]}>
                <Text style={styles.heading}>Start Time: </Text>
            </View>
            <View style={[Layout.tableCell, { flex: 2.25, paddingLeft: 40 }]}>
                <TouchableHighlight underlayColor="transparent"
                    onPress={() => toggleTimePicker("start", props)}
                    style={{ width: 140, height: 25 }}

                >
                    <Text style={styles.time}>{taskStartTime}</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight style={[Layout.tableCell, { flex: 0.5 }]}
                underlayColor="transparent"
                onPress={() => toggleTimePicker(props)}
            >
                <View style={{ width: 50 }}>
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
        fontFamily: "rubik-regular",
        fontSize: 13,
        marginTop: 2,
        width: 100,
    },
    time: {
        fontFamily: "rubik-regular",
        fontSize: 13,
        width: Dimensions.get('window').width * 0.3,
        marginTop: 2,
    },
    icon: {
        marginLeft: Dimensions.get('window').width * 0.075,
        top: -2
    }
}

export default TimePicker;