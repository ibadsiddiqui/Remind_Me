import React, { Component } from 'react';
import { TouchableHighlight, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome';
import DisplayModal from './../components/Dashboard/DisplayModal';
const SIZE = 80;

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
        console.log(this.state)
        return (
            <View style={{
                position: 'absolute',
                alignItems: 'center'
            }}>
                <TouchableHighlight
                    onPress={() => this.triggerModal()}
                    underlayColor="#2882D8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE - 20,
                        height: SIZE - 20,
                        borderRadius: SIZE / 2,
                        backgroundColor: '#F857C3',
                        marginBottom: 50,
                        elevation: 10
                    }}
                >
                    <Icon name="plus" size={24} color="#F8F8F8" />
                </TouchableHighlight>
                <DisplayModal
                    data="Krunal"
                    modalVisible={this.state.modalVisible}
                />
            </View>
        );
    }
}

export { AddButton };