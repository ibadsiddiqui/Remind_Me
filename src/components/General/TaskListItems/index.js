import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import styles from './styles';
import SwipeableRow from '../SwipeableRow';

const TaskListItems = (props) => {
    const { item, toggleTaskStatus } = props;
    const { taskFlag, taskID, completed, taskStartTime, taskDescription, taskDate } = item;
    const sectionTitleForTaskList = new Date(taskDate).toLocaleDateString();
    return (
        <View style={styles.container}>
            <SwipeableRow {...props}>
                <TouchableOpacity style={[Layout.tableRow, styles.styledRow(taskFlag)]}
                    onPress={() => toggleTaskStatus(sectionTitleForTaskList, taskID)}
                >
                    <View style={styles.iconContainer}>
                        {
                            completed ?
                                <MaterialIcons name="radio-button-checked" color={Colors.onboardingBtnBackground} size={20} />
                                :
                                <MaterialIcons name="radio-button-unchecked" color={Colors.uncheckedCirlce} size={20} />
                        }
                    </View>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDateTxt}> {taskStartTime}</Text>
                    </View>
                    <View style={[Layout.tableCell, { justifyContent: 'center' }]}>
                        <Text style={styles.headingTxt(completed)}>{taskDescription}</Text>
                    </View>
                </TouchableOpacity>
            </SwipeableRow>
        </View>
    )
}

export default TaskListItems;