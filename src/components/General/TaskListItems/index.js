import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { getLocaleDateString, hour24Converter, getHours, getMinute } from '../../../helpers/timeConverter';
import SwipeableRow from '../SwipeableRow';
import styles from './styles';

const TaskListItems = (props) => {
    const { item, toggleTaskStatus } = props;
    const { taskFlag, taskID, completed, taskDescription, taskDate } = item;
    const sectionTitleForTaskList = getLocaleDateString(taskDate);
    const time12 = hour24Converter(getHours(taskDate), getMinute(taskDate));
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
                        <Text style={styles.timeDateTxt}>{time12}</Text>
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