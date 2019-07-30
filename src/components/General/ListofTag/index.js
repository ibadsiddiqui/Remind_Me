import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { renderColoredCircle } from '../../../constants/Colors';
import styles from './styles'

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

export default ListOfFlag;