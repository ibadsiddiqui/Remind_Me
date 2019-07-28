import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { renderColoredCircle } from '../../../components/General/ListofTag';

const { width } = Dimensions.get('window')

const TaskListItems = (props) => {
    const { index, item } = props
    return (
        <View style={styles.container} key={index}>
            <TouchableOpacity style={[Layout.tableRow, styles.styledRow(item.taskFlag)]}>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="radio-button-unchecked" color={Colors.uncheckedCirlce} size={20} />
                </View>
                <View style={styles.timeDateContainer}>
                    <Text style={styles.timeDateTxt}> {item.taskStartTime}</Text>
                </View>
                <View style={[Layout.tableCell, { justifyContent: 'center' }]}>
                    <Text style={styles.headingTxt}>{item.taskDescription}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: { flex: 1, marginTop: 16 },
    iconContainer: { ...Layout.tableCell, justifyContent: 'center', flex: 0.1 },
    headingTxt: { fontSize: 14.5, fontFamily: "rubik-medium", color: Colors.headingColor },
    timeDateContainer: { ...Layout.tableCell, justifyContent: 'center', flex: 0.3 },
    timeDateTxt: { fontSize: 12, color: Colors.inactiveTintColor, fontFamily: "rubik-regular" },
    styledRow: (flag) => {
        return {
            width: width * 0.9,
            height: 55.21,
            paddingTop: 5,
            borderWidth: 0.5,
            borderLeftWidth: 5,
            borderLeftColor: renderColoredCircle(flag).backgroundColor,
            borderTopColor: Colors.transparent,
            borderBottomColor: Colors.transparent,
            borderRightColor: Colors.transparent,
            elevation: 1,
            paddingHorizontal: 10,
            borderRadius: 5,
            alignSelf: 'center',
        }
    }
}

export default TaskListItems;