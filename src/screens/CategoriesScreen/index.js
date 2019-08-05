import React, { PureComponent } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import Header from '../../components/Home/Header';
import GridView from '../../components/Categories/GridView';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
const { height } = Dimensions.get('window')

class CategoriesScreen extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <View style={{ flex: 5 }}>
                    <ScrollView contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <GridView {...this.props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen)