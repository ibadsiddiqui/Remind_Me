import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { slicingMomentDateUsingAt } from '../../../helpers/timeConverter';
import TaskListItems from '../../General/TaskListItems';
import styles from './styles';

export default class SpecificListGenerator extends React.PureComponent {

    _keyExtractor = (item, index) => index.toString();

    render() {
        const { TaskList } = this.props;
        const flag = this.props.navigation.getParam("flag")
        return (
            <FlatList style={styles.listContainer}
                keyExtractor={this._keyExtractor}
                data={TaskList}
                renderItem={({ item, index }) =>
                    <View style={styles.dayHeadingContainer} key={index.toString()}>
                        <Text style={styles.dayHeadingText}> {slicingMomentDateUsingAt(item.date)}</Text>
                        {
                            item.data.map((_item, _index) =>
                                <TaskListItems {...this.props} item={_item} key={_index} flag={flag} />
                            )
                        }
                    </View>
                }
            />
            // <View></View>
        )
    }
}