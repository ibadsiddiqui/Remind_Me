import React from 'react'
import { Modal, View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
const DisplayModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{ marginTop: 22, height, width }}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!props.modalVisible);
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200
  },
  text: {
    fontSize: 20,
    marginLeft: 150
  }
})

export default DisplayModal;