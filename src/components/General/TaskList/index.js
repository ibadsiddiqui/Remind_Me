import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import TaskListItems from '../TaskListItems';
import { comparingWithOutAt, comparingWithAt } from '../../../helpers/stringHelper';
import styles from './styles';
const { width, height } = Dimensions.get('window')

export default class TaskListGenerator extends React.PureComponent {

    _keyExtractor = (item, index) => index;

    render() {
        const { TaskList, ListOfDaysSelected } = this.props;
        return (
            <FlatList
                style={styles.listContainer}
                keyExtractor={this._keyExtractor}
                data={[...ListOfDaysSelected]}
                renderItem={({ item, index }) =>
                    <View style={styles.dayHeadingContainer} key={index}>
                        <Text style={styles.dayHeadingText}> {item}</Text>
                        {
                            TaskList.map((_item, _index) => {
                                const conditionOne = comparingWithAt(item, _item);
                                const conditionTwo = comparingWithOutAt(item, _item);
                                if (conditionOne && conditionTwo)
                                    return null
                                else return (
                                    <TaskListItems item={_item} index={_index} />
                                )
                            })
                        }
                    </View>
                }
            />
        )
    }
}