import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import TaskListItems from '../TaskListItems';
import { comparingWithOutAt, comparingWithAt } from '../../../helpers/stringHelper';
import styles from './styles';
import { slicingMomentDateUsingAt } from '../../../helpers/timeConverter';
import { sortArrayAccordingToTime } from '../../../helpers/listHelpers';

export default class TaskListGenerator extends React.PureComponent {
    _keyExtractor = (item, index) => index.toString();

    render() {
        const { TaskList, ListOfDaysSelected } = this.props;
        return (
            <FlatList style={styles.listContainer}
                keyExtractor={this._keyExtractor}
                data={[...ListOfDaysSelected]}
                renderItem={({ item, index }) =>
                    <View style={styles.dayHeadingContainer} key={index.toString()}>
                        <Text style={styles.dayHeadingText}> {slicingMomentDateUsingAt(item)}</Text>
                        {
                            sortArrayAccordingToTime(TaskList).map((_item, _index) => {
                                const conditionOne = comparingWithAt(item, _item);
                                const conditionTwo = comparingWithOutAt(item, _item);
                                if (conditionOne && conditionTwo)
                                    return null
                                else return (
                                    <TaskListItems {...this.props} item={_item} key={_index.toString()} />
                                )
                            })
                        }
                    </View>
                }
            />
        )
    }
}