import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { toggleTimePicker } from '../../../helpers/pickerhelpers';
import Layout from '../../../constants/Layout';

const TimePicker = (props) => {
    const { } = props;
    return (
        <View style={[Layout.tableRow, { paddingHorizontal: 10 }]}>
            <View style={[Layout.tableCell,{flex:1.5}]}>
                <Text style={styles.heading}>Start Time: </Text>
            </View>
            <View style={[Layout.tableCell, { flex:1.35}]}>
                <TouchableHighlight underlayColor="transparent" onPress={() => toggleTimePicker("start",props)}>
                    <Text style={styles.time}>00:00 </Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight style={[Layout.tableCell, 0.1]} underlayColor="transparent" onPress={() => toggleTimePicker(props)}>
                <Entypo name="chevron-down" size={20} color="black"
                    style={styles.icon} />
            </TouchableHighlight>
            <View style={[Layout.tableCell,{flex:1.5}]}>
                {/* <Text style={styles.heading}>End Time: </Text> */}
            </View>
            <View style={[Layout.tableCell, { flex:1.35}]}>
                {/* <TouchableHighlight underlayColor="transparent" onPress={() =>{}}> */}
                    {/* <Text style={styles.time}>19:00 </Text> */}
                {/* </TouchableHighlight> */}
            </View>
            <View style={[Layout.tableCell, 0.1]} >
                {/* <Entypo name="chevron-down" size={20} color="black"
                    style={styles.icon} /> */}
            </View>
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