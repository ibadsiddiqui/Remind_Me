import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import NoTask from '../../components/Home/NoTask';
import Header from '../../components/Home/Header';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';

class HomeScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Header />
                {
                    this.props.TaskList.length === 0 ?
                        <NoTask />
                        :
                        <FlatList
                            data={this.props.TaskList}
                            renderItem={({ item, index }) =>
                                <View style={{flex:1}}>
                                    <Text key={index}>{item.taskDescription}</Text>
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