import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import styles from './styles';
import AppleStyleSwipeableRow from '../SwipeableRow';

const TaskListItems = (props) => {
    const { item, toggleTaskStatus } = props
    return (
        <View style={styles.container}>
            <AppleStyleSwipeableRow>
                <TouchableOpacity style={[Layout.tableRow, styles.styledRow(item.taskFlag)]}
                    onPress={() => toggleTaskStatus(item.taskID)}
                >
                    <View style={styles.iconContainer}>
                        {
                            item.completed ?
                                <MaterialIcons name="radio-button-checked" color={Colors.onboardingBtnBackground} size={20} />
                                :
                                <MaterialIcons name="radio-button-unchecked" color={Colors.uncheckedCirlce} size={20} />
                        }
                    </View>
                    <View style={styles.timeDateContainer}>
                        <Text style={styles.timeDateTxt}> {item.taskStartTime}</Text>
                    </View>
                    <View style={[Layout.tableCell, { justifyContent: 'center' }]}>
                        <Text style={styles.headingTxt(item.completed)}>{item.taskDescription}</Text>
                    </View>
                </TouchableOpacity>
            </AppleStyleSwipeableRow>
        </View>
    )
}

export default TaskListItems;