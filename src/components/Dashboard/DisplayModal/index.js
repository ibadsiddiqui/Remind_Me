import React from 'react'
import { Modal, Image, View, Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import Images from '../../../assets/images';
import MainButton from '../../General/MainButton';

const { width } = Dimensions.get('window')
const DisplayModal = (props) => {
  const { triggerModal, modalVisible } = props
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => { }}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.2)', paddingTop: 100 }}>
        <View style={{ position: 'absolute', paddingTop: 120 }}>
          <Image source={Images.modalBackground} style={{ width: width }} resizeMode="cover" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={{ flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
              <MainButton {...props}
                triggerModal={() => triggerModal()}
              />
            </View>
          </View>
        </View>
        <Text style={{ textAlign: 'center' }}>Add new tasks</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            <TouchableHighlight
              onPress={() => triggerModal()}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
          {/* </View> */}
        </View>
      </View>
    </Modal >
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