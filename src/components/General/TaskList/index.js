import React, { Component } from 'react';
import { Text, View, SectionList, Dimensions } from 'react-native';
import { slicingMomentDateUsingAt } from '../../../helpers/timeConverter';
import TaskListItems from '../TaskListItems';
import styles from './styles';
import Colors from '../../../constants/Colors';

const { height } = Dimensions.get('window');

const TaskListGenerator = (props) => {
    const { TaskList, individualCategory, category } = props;
    if (individualCategory) return (
        <SectionList
            style={{ height }}
            sections={TaskList}
            keyExtractor={(item, index) => index}
            renderSectionHeader={({ section }) =>
                <View style={styles.dayHeadingContainer}>
                    <Text style={styles.dayHeadingText}> {slicingMomentDateUsingAt(section.date)}:</Text>
                </View >
            }
            renderItem={({ item, index }) =>
                item.taskFlag == category ?
                    <TaskListItems {...props} item={item} key={index} />
                    :
                    <View style={{ flex: 1, marginTop: 16, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={[styles.dayHeadingText, { borderBottomColor: Colors.inputBorders, width: height * 0.5, borderColor: 'transparent', textAlign: 'center', borderWidth: 1, color: Colors.inactiveTintColor }]}>No Task for this date</Text>
                    </View >
            }
        />
    )
    else return (
        <SectionList
            style={{ height }}
            sections={TaskList}
            keyExtractor={(item, index) => index}
            renderSectionHeader={({ section }) =>
                <View style={styles.dayHeadingContainer}>
                    <Text style={styles.dayHeadingText}> {slicingMomentDateUsingAt(section.date)}</Text>
                </View >
            }
            renderItem={({ item, index }) =>
                <TaskListItems {...props} item={item} key={index} />
            }
        />
    )
}
export default TaskListGenerator