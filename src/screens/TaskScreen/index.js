import React, { PureComponent } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import Header from '../../components/Home/Header';
import GridView from '../../components/TaskScreen/GridView';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
const { height } = Dimensions.get('window')

class TaskScreen extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ flex: 5 }}>
                    <ScrollView contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <GridView />
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
export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen)