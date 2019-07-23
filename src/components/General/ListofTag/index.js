import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

const { width } = Dimensions.get('window')
const { transparent, personalFlag, meetingFlag, partyFlag, shoppingFlag, studyFlag, workFlag } = Colors;

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
    let conditionPersonal = taskFlag !== "Personal";
    let conditionWork = taskFlag !== "Work";
    let conditionStudy = taskFlag !== "Study";
    let conditionMeeting = taskFlag !== "Meeting";
    let conditionParty = taskFlag !== "Party";
    let conditionShopping = taskFlag !== "Shopping";
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <TouchableOpacity onPress={() => setTaskFlag("Personal")}
                style={styles.personalBtn(conditionPersonal)}
            >
                <View style={[styles.reminderTypeContainer]}>
                    {conditionPersonal && <View style={renderColoredCircle("Personal")} />}
                    <Text style={styles.reminderTypeText(conditionPersonal)}>Personal</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Work")}
                style={styles.workBtn(conditionWork)}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionWork && <View style={renderColoredCircle("Work")} />}
                    <Text style={styles.reminderTypeText(conditionWork)}>Work</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Meeting")}
                style={styles.meetingBtn(conditionMeeting)}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionMeeting && <View style={renderColoredCircle("Meeting")} />}
                    <Text style={styles.reminderTypeText(conditionMeeting)}>Meeting</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Study")}
                style={styles.studyBtn(conditionStudy)}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionStudy && <View style={renderColoredCircle("Study")} />}
                    <Text style={styles.reminderTypeText(conditionStudy)}>Study</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Shopping")}
                style={styles.shoppingBtn(conditionShopping)}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionShopping && <View style={renderColoredCircle("Shopping")} />}
                    <Text style={styles.reminderTypeText(conditionShopping)}>Shopping</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTaskFlag("Party")}
                style={styles.partyBtn(conditionParty)}
            >
                <View style={styles.reminderTypeContainer}>
                    {conditionParty && <View style={renderColoredCircle("Party")} />}
                    <Text style={styles.reminderTypeText(conditionParty)}>Party</Text>
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
    personalBtn: (condition) => {
        return {
            backgroundColor: condition ? transparent : personalFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    workBtn: (condition) => {
        return {
            backgroundColor: condition ? transparent : workFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    meetingBtn: (condition) => {
        return {
            backgroundColor: condition ? transparent : meetingFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    studyBtn: (condition) => {
        return {
            backgroundColor: condition ? transparent : studyFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    shoppingBtn: (condition) => {
        return {
            backgroundColor: condition ? transparent : shoppingFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    partyBtn: (condition) => {
        return {
            backgroundColor: condition ? transparent : partyFlag,
            ...Layout.centered,
            borderRadius: 5
        }
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