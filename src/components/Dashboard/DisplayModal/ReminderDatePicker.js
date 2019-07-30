import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { toggleDatePicker } from '../../../helpers/pickerhelpers';
import moment from 'moment';
import Layout from '../../../constants/Layout';
import Colors from '../../../constants/Colors';

const ReminderDatePicker = (props) => {
    const { taskDate } = props;
    const date = moment(taskDate).calendar();
    return (
        <View style={[Layout.tableRow, { paddingHorizontal: 10, }]}>
            <View style={[Layout.tableCell, { flex: 1.4 }]}>
                <Text style={styles.heading}>Choose date: </Text>
            </View>
            <View style={[Layout.tableCell, { flex: 2.25 }]}>
                <TouchableHighlight underlayColor="transparent" onPress={() => toggleDatePicker(props)}>
                    <Text style={styles.dateText}>
                        {date.includes(" at ") ? date.slice(0, date.indexOf(" at ")) : date}
                    </Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight style={[Layout.tableCell, { flex: 0.5 }]}
                onPress={() => toggleDatePicker(props)}
                underlayColor="transparent"
            >
                <View style={{ width: 50, marginLeft: 15 }}>
                    <Entypo name="chevron-down" size={20} color={Colors.black}
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
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    heading: {
        textAlign: 'left',
        width: 100,
        fontFamily: "rubik-regular",
        fontSize: 13,
        marginTop: 2
    },
    chooseDateBtnContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        marginTop: 40
    },
    chooseDateBtnText: {
        textAlign: 'center',
        fontFamily: "rubik-regular",
        fontSize: 13
    },
    dateText: {
        fontFamily: "rubik-medium",
        fontSize: 13,
        width: Layout.window.width * 0.3,
        textAlign: 'left',
        marginTop: 2,
        marginLeft: 25,
        paddingLeft: 10
    },
    icon: {
        top: -2,
        marginLeft: Layout.window.width * 0.075,
    }
}

export default ReminderDatePicker;