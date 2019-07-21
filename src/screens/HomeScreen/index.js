import React, { Component } from 'react';
import { View } from 'react-native';
import NoTask from '../../components/Home/NoTask';
import Header from '../../components/Home/Header';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';

class HomeScreen extends Component {
    render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)