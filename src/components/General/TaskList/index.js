import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { sortArrayAccordingToTime } from '../../../helpers/listHelpers';
import { comparingWithAt, comparingWithOutAt } from '../../../helpers/stringHelper';
import { slicingMomentDateUsingAt } from '../../../helpers/timeConverter';
import TaskListItems from '../TaskListItems';
import styles from './styles';

export default class TaskListGenerator extends React.PureComponent {
    _keyExtractor = (item, index) => index.toString();

    render() {
        const { TaskList, ListOfDaysSelected } = this.props;
        let sortedArray = sortArrayAccordingToTime(TaskList)
        return (
            <FlatList style={styles.listContainer}
                keyExtractor={this._keyExtractor}
                data={[...ListOfDaysSelected]}
                renderItem={({ item, index }) =>
                    <View style={styles.dayHeadingContainer} key={index.toString()}>
                        <Text style={styles.dayHeadingText}> {slicingMomentDateUsingAt(item)}</Text>
                        {
                            sortedArray.map((_item, _index) => {
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