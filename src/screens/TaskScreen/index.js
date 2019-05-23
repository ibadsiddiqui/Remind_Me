import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import Header from '../../components/Home/Header';
import GridView from '../../components/TaskScreen/GridView';

const { height } = Dimensions.get('window')

export default class TaskScreen extends Component {
    constructor() {
        super();
        this.state = {
            firstRow: ['Personal', "Work"],
            secondRow: ["Meeting", "Shopping"],
            thirdRow: ["Party", "Study"]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ flex: 5 }}>
                    <ScrollView contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <GridView {...this.state} />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = {
    contentContainer: { height },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
}