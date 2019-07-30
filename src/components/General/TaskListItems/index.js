import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import styles from './styles';

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

export default TaskListItems;