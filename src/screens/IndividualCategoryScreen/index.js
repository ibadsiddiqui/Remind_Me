import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import NoTask from '../../components/Home/NoTask';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
import IndividualHeader from '../../components/IndividualCategory/Header';
import SpecificListGenerator from '../../components/IndividualCategory/specificListGenerator';
const { height } = Dimensions.get('window')

class IndividualCategoryScreen extends Component {
    state = { flagType: "" }

    componentDidMount() {
        const flag = this.props.navigation.getParam("flag", "Personal");
        this.setState({ flagType: flag })
    }

    render() {
        const { TaskList } = this.props;
        return (
            <View style={styles.container}>
                <IndividualHeader {...this.props} {...this.state} />
                {
                    TaskList.length !== 0 &&
                    <View style={{ flex: 1, marginTop: height * 0.195 }} />
                }
                {
                    TaskList.length === 0 ?
                        <NoTask /> :
                        <SpecificListGenerator {...this.props} {...this.state} />
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

export default connect(mapStateToProps, mapDispatchToProps)(IndividualCategoryScreen)