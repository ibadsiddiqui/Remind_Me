import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

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
            backgroundColor: Colors.personalFlag
        };
    else if (color == "Work")
        return {
            ...style,
            backgroundColor: Colors.workFlag
        };
    else if (color == "Meeting")
        return {
            ...style,
            backgroundColor: Colors.meetingFlag
        };

    else if (color == "Study")
        return {
            ...style,
            backgroundColor: Colors.studyFlag
        };
    else if (color == "Shopping")
        return {
            ...style,
            backgroundColor: Colors.shoppingFlag
        }
    else if (color == "Party")
        return {
            ...style,
            backgroundColor: Colors.partyFlag
        }
}

const ListOfFlag = (props) => {
    const { setTaskFlag, taskFlag } = props;
    const { transparent, personalFlag, meetingFlag, partyFlag, shoppingFlag, studyFlag, workFlag } = Colors;
    let conditionForPersonal = taskFlag !== "Personal";
    let conditionForWork = taskFlag !== "Work";
    let conditionForStudy = taskFlag !== "Study";
    let conditionForMeeting = taskFlag !== "Meeting";
    let conditionForParty = taskFlag !== "Party";
    let conditionForShopping = taskFlag !== "Shopping";
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <TouchableOpacity onPress={() => setTaskFlag("Personal")}
                style={{ backgroundColor: conditionForPersonal ? transparent : personalFlag, ...Layout.centered, borderRadius: 5 }}
            >
                <View style={[styles.reminderTypeContainer]}>
                    {conditionForPersonal && <View style={renderColoredCircle("Personal")} />}
                    <Text style={styles.reminderTypeText(conditionForPersonal)}>Personal</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Work")}
                style={{ backgroundColor: conditionForWork ? transparent : workFlag, ...Layout.centered, borderRadius: 5 }}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionForWork && <View style={renderColoredCircle("Work")} />}
                    <Text style={styles.reminderTypeText(conditionForWork)}>Work</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Meeting")}
                style={{ backgroundColor: conditionForMeeting ? transparent : meetingFlag, ...Layout.centered, borderRadius: 5 }}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionForMeeting && <View style={renderColoredCircle("Meeting")} />}
                    <Text style={styles.reminderTypeText(conditionForMeeting)}>Meeting</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Study")}
                style={{ backgroundColor: conditionForStudy ? transparent : studyFlag, ...Layout.centered, borderRadius: 5 }}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionForStudy && <View style={renderColoredCircle("Study")} />}
                    <Text style={styles.reminderTypeText(conditionForStudy)}>Study</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Shopping")}
                style={{ backgroundColor: conditionForShopping ? transparent : shoppingFlag, ...Layout.centered, borderRadius: 5 }}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionForShopping && <View style={renderColoredCircle("Shopping")} />}
                    <Text style={styles.reminderTypeText(conditionForShopping)}>Shopping</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Party")}
                style={{ backgroundColor: conditionForParty ? transparent : partyFlag, ...Layout.centered, borderRadius: 5 }}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionForParty && <View style={renderColoredCircle("Party")} />}
                    <Text style={styles.reminderTypeText(conditionForParty)}>Party</Text>
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
        borderBottomColor: "#CFCFCF",
        paddingVertical: 2.5,
        height: 100
    },
    cancelBtnContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    reminderTypeContainer: {
        marginHorizontal: 10,
        padding: 5,
        flexDirection: 'row',
    },
    reminderTypeText: (notFocused) => {
        return {
            fontFamily: "rubik-regular",
            fontSize: 16,
            color: notFocused ? "#8E8E8E" : Colors.white,
        }
    },
}

export default ListOfFlag;