import React, { Component } from 'react';
import { View } from "react-native";
import DisplayModal from '../components/Dashboard/DisplayModal';
import MainButton from '../components/General/MainButton';

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

        return (
            <View style={styles.container}>
                <MainButton {...this.state}
                    triggerModal={() => this.triggerModal()}
                />
                <DisplayModal
                    data="Krunal"
                    {...this.state}
                    modalVisible={this.state.modalVisible}
                    triggerModal={() => this.triggerModal()}
                />
            </View>
        );
    }
}

const styles = {
    container:{
        position: 'absolute',
        alignItems: 'center'
    }
}
export { AddButton };