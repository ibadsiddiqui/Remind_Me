import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import NoTask from '../../components/Home/NoTask';
import Header from '../../components/Home/Header';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
import TaskListItems from '../../components/General/TaskListItems';
import _ from 'lodash'

const { width, height } = Dimensions.get('window')

class HomeScreen extends Component {

    _keyExtractor = (item, index) => index;

    render() {
        return (
            <View style={styles.container}>
                <Header />
                {
                    this.props.TaskList.length !== 0 &&
                    <View style={{ flex: 1, marginTop: height * 0.195 }} />
                }
                {
                    this.props.TaskList.length === 0 ?
                        <NoTask /> :
                        <FlatList
                            style={{ height: height * 0.8, width }}
                            keyExtractor={this._keyExtractor}
                            data={[...this.props.ListOfDaysSelected]}
                            renderItem={({ item, index }) =>
                                <View style={{ flex: 1, marginTop: 16 }} key={index}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontFamily: "rubik-medium",
                                        color: "#8B87B3",
                                        marginHorizontal: 10,
                                    }}> {item}</Text>
                                    {
                                        this.props.TaskList.map((_item, _index) => {
                                            if (item !== _item.taskDate.slice(0, _item.taskDate.indexOf(" at ")))
                                                return null
                                            else return (
                                                <TaskListItems item={_item} index={_index} />
                                            )
                                        })
                                    }
                                </View>
                            }
                        />
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