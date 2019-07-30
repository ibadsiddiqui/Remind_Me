import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import NoTask from '../../components/Home/NoTask';
import Header from '../../components/Home/Header';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
import TaskListGenerator from '../../components/General/TaskList';
const { height } = Dimensions.get('window')

class HomeScreen extends Component {

    render() {
        const { TaskList } = this.props;
        return (
            <View style={styles.container}>
                <Header />
                {
                    TaskList.length !== 0 &&
                    <View style={{ flex: 1, marginTop: height * 0.195 }} />
                }
                {
                    TaskList.length === 0 ?
                        <NoTask /> :
                        <TaskListGenerator {...this.props} />
                }
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)