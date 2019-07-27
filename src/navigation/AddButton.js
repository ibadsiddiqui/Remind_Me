import React, { Component } from 'react';
import { View } from "react-native";
import DisplayModal from '../components/Dashboard/DisplayModal';
import MainButton from '../components/General/MainButton';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../redux/dispatchers';

class AddButton extends Component {
    state = {
        modalVisible: false
    }

    triggerModal = () => {
        this.setState(prevState => ({
            modalVisible: !prevState.modalVisible
        }));
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