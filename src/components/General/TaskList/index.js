import React from 'react';
import { Text, View, SectionList, Dimensions } from 'react-native';
import { slicingMomentDateUsingAt } from '../../../helpers/timeConverter';
import TaskListItems from '../TaskListItems';
import styles from './styles';

const { height } = Dimensions.get('window');

export default class TaskListGenerator extends React.PureComponent {

    render() {
        const { TaskList, } = this.props;
        return (
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
                    <TaskListItems {...this.props} item={item} key={index} />
                }
            />
        )
    }
}