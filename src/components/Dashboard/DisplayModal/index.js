import React from 'react'
import { Modal, Image, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import Images from '../../../assets/images';
import ReminderDatePicker from "./ReminderDatePicker";
import ListOfFlag from '../../General/ListofTag';
import UserInput from './UserInput';
import { ModalHeader, ModalHeading } from './ModalHeader';
import TimePicker from './TimePicker'
import Layout from '../../../constants/Layout';
import Colors from '../../../constants/Colors';
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
          <Image
            source={Images.modalBackground}
            style={{ width: width }}
            resizeMode="cover"
          />
        </View>
        <View style={Layout.table}>
          <ModalHeader {...props} />
          <ModalHeading />
          <UserInput />
          <View style={styles.listTopContainer}>
            <View style={styles.listContainer}>
              <ListOfFlag />
            </View>
          </View>
          <ReminderDatePicker />
          <TimePicker />
          <View style={Layout.tableRow}>
            <View style={Layout.tableCellCentered()}>
              <TouchableOpacity onPress={() => { }}
                style={[styles.getStartedBtn, Layout.centered]}
              >
                <Text style={styles.getStartedText}>Submit</Text>
              </TouchableOpacity>
            </View>
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
  listTopContainer: {
    ...Layout.tableRow,
    flex: 0.5,
  },
  listContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center'
  },
  getStartedBtn: {
    width: 258,
    height: 52,
    backgroundColor: Colors.addTaskButton,
    justifyContent: 'center',
    borderRadius: 10
  },
  getStartedText:{
    color: Colors.white,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: "opensans-regular",
    fontWeight: '700'
  }
}

export default DisplayModal;