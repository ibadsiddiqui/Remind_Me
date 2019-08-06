import React, { PureComponent } from 'react';
import { View } from "react-native";
import { connect } from "react-redux";
import DisplayModal from '../components/Dashboard/DisplayModal';
import MainButton from '../components/General/MainButton';
import { replaceTaskTimeWithStartTime } from '../helpers/timeConverter';
import { mapDispatchToProps, mapStateToProps } from '../redux/dispatchers';
import TaskServices from '../services/Task';

class AddButton extends PureComponent {
    state = {
        modalVisible: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.taskStartTime !== this.props.taskStartTime)
            replaceTaskTimeWithStartTime(this.props)
    }

    triggerModal = () => {
        this.setState(prevState => ({
            modalVisible: !prevState.modalVisible
        }), () => {
            if (this.state.modalVisible === false)
                TaskServices.ResetTaskDetails(this.props)
        });
    }

    render() {
        const { modalVisible } = this.state
        return (
            <View style={styles.container}>
                <MainButton {...this.state}
                    triggerModal={this.triggerModal}
                />
                <DisplayModal {...this.state} {...this.props}
                    modalVisible={modalVisible}
                    triggerModal={this.triggerModal}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        position: 'absolute',
        alignItems: 'center'
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddButton)