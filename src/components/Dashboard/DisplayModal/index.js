import React from 'react'
import { Modal, Image, TouchableHighlight, View, Text, Dimensions } from 'react-native';
import Images from '../../../assets/images';

import ListOfFlag from '../../General/ListofTag';
import UserInput from './UserInput';
import { ModalHeader, ModalHeading } from './ModalHeader';
import Entypo from '@expo/vector-icons/Entypo';

const { width } = Dimensions.get('window')

const DisplayModal = (props) => {
  const { modalVisible } = props
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => { }}
    >
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={Images.modalBackground} style={{ width: width }} resizeMode="cover" />
        </View>
        <View style={styles.tableContainer}>
          <ModalHeader {...props} />
          <ModalHeading />
          <UserInput />
          <View style={{ flex: 0.5, alignSelf: 'stretch', flexDirection: 'row', }}>
            <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center' }}>
              <ListOfFlag />
            </View>
          </View>
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', }}>
            <View style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'flex-start',
              paddingHorizontal: 10,
              marginTop: 40
            }}>
              <TouchableHighlight>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                  <Text style={{ textAlign: 'center', fontFamily: "rubik-regular", fontSize: 13 }}>Choose date</Text>
                  <Entypo
                    name="chevron-small-down"
                    size={20} color="black"
                    style={{ marginLeft: 75, marginBottom: 10 }}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 10, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={{ fontFamily: "rubik-medium", fontSize: 13, textAlign: 'center', marginTop: 2 }}> Today, 19:00 — 21:00 </Text>
            <Entypo name="chevron-down" size={20} color="black" />
          </View>
          <View style={{ flex: 2 }} />
        </View>
      </View>
    </Modal >
  )
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingTop: 100
  },
  containerImage: {
    position: 'absolute',
    paddingTop: 120
  },
  tableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
}

export default DisplayModal;