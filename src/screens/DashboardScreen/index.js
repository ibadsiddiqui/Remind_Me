import React, { Component } from 'react';
import { View } from 'react-native';
import Images from '../../assets/images';
import NoTask from './../../components/Dashboard/NoTask';
import Header from './../../components/Dashboard/Header';

export default class DashboardScreen extends Component {

    render() {
        const { emptyTodo, header } = Images.Dashboard;
        return (
            <View style={styles.container}>
                <Header />
                <NoTask />
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