import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { toggleDatePicker } from '../../../helpers/pickerhelpers';

const ReminderDatePicker = (props) => {
    const { taskDate } = props
    return (
        <View style={styles.container}>
            <View style={styles.chooseDateBtnContainer}>
                <TouchableHighlight underlayColor="transparent"
                    onPress={() => toggleDatePicker(props)}
                >
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <Text style={styles.chooseDateBtnText}>Choose date: </Text>
                        <Text style={styles.dateText}>{
                            taskDate.includes("/") ? taskDate :
                                taskDate.slice(0, taskDate.indexOf(" at "))}
                        </Text>
                        <Entypo size={20} color="black" style={styles.icon}
                            name="chevron-down"
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
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
        textAlign: 'center',
        marginLeft: 25,
        top: 0
    },
    icon: {
        top: -2,
        marginLeft: 15,
    }
}

export default ReminderDatePicker;