import React from 'react';
import { Dimensions, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../assets/images';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import TaskServices from '../../../services/Task';
import ListOfFlag from '../../General/ListofTag';
import { ModalHeader, ModalHeading } from './ModalHeader';
import ReminderDatePicker from "./ReminderDatePicker";
import TimePicker from './TimePicker';
import UserInput from './UserInput';
const { width } = Dimensions.get('window')

const DisplayModal = (props) => {
  const { modalVisible } = props
  return (
    <Modal transparent={true} visible={modalVisible}
      animationType="slide"
      onRequestClose={() => { }}
    >
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={{ width }} resizeMode="cover"
            source={Images.modalBackground}
          />
        </View>
        <View style={Layout.table}>
          <ModalHeader {...props} />
          <ModalHeading />
          <UserInput {...props} />
          <View style={styles.listTopContainer}>
            <View style={styles.listContainer}>
              <ListOfFlag {...props} />
            </View>
          </View>
          <ReminderDatePicker {...props} />
          <TimePicker {...props} />
          <View style={[Layout.tableRow, { flex: 0.1 }]}>
            <View style={Layout.tableCellCentered()}>
              <TouchableOpacity onPress={() => TaskServices.CreateTask(props)}
                style={styles.getStartedBtn}
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
    backgroundColor: Colors.opaqueBackground,
    paddingTop: 100
  },
  containerImage: {
    position: 'absolute',
    paddingTop: 120
  },
  listTopContainer: {
    ...Layout.tableRow,
    paddingBottom: 10
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
    borderRadius: 10,
    ...Layout.centered
  },
  getStartedText: {
    color: Colors.white,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: "opensans-regular",
    fontWeight: '700'
  }
}

export default DisplayModal;