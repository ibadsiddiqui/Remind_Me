import React from 'react'
import { Modal, Image, View, Text, Dimensions } from 'react-native';
import Images from '../../../assets/images';

import ListOfFlag from '../../General/ListofTag';
import UserInput from './UserInput';
import { ModalHeader, ModalHeading } from './ModalHeader';

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
          <View style={{ flex: 3, alignSelf: 'stretch', flexDirection: 'row' }} />
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