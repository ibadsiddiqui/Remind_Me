import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


const ReminderDatePicker = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.chooseDateBtnContainer}>
                <TouchableHighlight>
                    <View style={{ flex: 3, flexDirection: 'row' }}>
                        <Text style={styles.chooseDateBtnText}>Choose date: </Text>
                        <Text style={styles.dateText}>Today</Text>
                        <Entypo
                            name="chevron-down"
                            size={20} color="black"
                            style={styles.icon}
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
        // marginTop: 2
    },
    icon: {
        // position:'absolute',
        // left: 150,
        // marginBottom:2
        top:-2,
        marginLeft: 15,
        // marginBottom: 20
    }
}

export default ReminderDatePicker;