import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window')
function renderColoredCircle(color) {
    style = {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginHorizontal: 5
    };
    if (color == "Personal")
        return {
            ...style,
            backgroundColor: '#FFD506'
        };
    else if (color == "Work")
        return {
            ...style,
            backgroundColor: '#5DE61A'
        };
    else if (color == "Meeting")
        return {
            ...style,
            backgroundColor: '#D10263'
        };

    else if (color == "Study")
        return {
            ...style,
            backgroundColor: '#3044F2'
        };
        else if (color == "Shopping")
        return{
            ...style,
            backgroundColor:"#F29130"
        }

}
const ListOfFlag = (props) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <TouchableOpacity >
                <View style={[styles.reminderTypeContainer, { marginLeft: 0 }]}>
                    <View style={renderColoredCircle("Personal")} />
                    <Text style={styles.reminderTypeText}>Personal</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <View style={styles.reminderTypeContainer}>
                    <View style={renderColoredCircle("Work")} />
                    <Text style={styles.reminderTypeText}>Work</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.reminderTypeContainer}>
                    <View style={renderColoredCircle("Meeting")} />
                    <Text style={styles.reminderTypeText}>Meeting</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.reminderTypeContainer}>
                    <View style={renderColoredCircle("Study")} />
                    <Text style={styles.reminderTypeText}>Study</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.reminderTypeContainer}>
                    <View style={renderColoredCircle("Shopping")} />
                    <Text style={styles.reminderTypeText}>Shopping</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = {
    container: {
        width: width * 0.95,
        borderWidth: 1,
        borderColor: "transparent",
        borderBottomColor: "#CFCFCF"
    },
    cancelBtnContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    reminderTypeContainer: {
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    reminderTypeText: {
        fontFamily: "rubik-regular",
        fontSize: 16,
        color: "#8E8E8E"
    },
}

export default ListOfFlag;