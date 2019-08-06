import React, { PureComponent } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import GridView from '../../components/Categories/GridView';
import Header from '../../components/Home/Header';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatchers';
const { height } = Dimensions.get('window')

class CategoriesScreen extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <View style={{ flex: 4 }}>
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