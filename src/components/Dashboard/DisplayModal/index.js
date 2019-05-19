import React from 'react'
import { Modal, Image, View, Text, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Images from '../../../assets/images';
import MainButton from '../../General/MainButton';
// import {  } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')
const DisplayModal = (props) => {
  const { triggerModal, modalVisible } = props
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
          <View style={styles.cancelBtnRowContainer}>
            <View style={styles.cancelBtnContainer}>
              <MainButton {...props} triggerModal={() => triggerModal()} />
            </View>
          </View>
          <View style={styles.headingRowContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.addTaskHeading}>Add new tasks</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignSelf: 'flex-start', flexDirection: 'row' }}>
            <View style={{ flex: 1, alignSelf: 'flex-start', alignItems: 'center' }}>
              <TextInput style={{
                width: width * 0.95, height: height * 0.1, paddingBottom: 20, paddingHorizontal: 5,
                textDecorationLine: "none", fontSize: 32, fontFamily: "rubik-regular",
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: "#CFCFCF"
              }}
                placeholder="Enter task here"
              />
            </View>
          </View>
          <View style={{ flex: 0.5, alignSelf: 'stretch', flexDirection: 'row', }}>
            <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center' }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                style={{
                  width: width * 0.95,
                  borderWidth: 1,
                  borderColor: "transparent",
                  borderBottomColor: "#CFCFCF"
                }}>
                <TouchableOpacity >
                  <View style={[styles.reminderTypeContainer, { marginLeft: 0 }]}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#FFD506', marginHorizontal: 5 }} />
                    <Text style={styles.reminderTypeText}>Personal</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity >
                  <View style={styles.reminderTypeContainer}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#5DE61A', marginHorizontal: 5 }} />
                    <Text style={styles.reminderTypeText}>Work</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.reminderTypeContainer}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#D10263', marginHorizontal: 5 }} />
                    <Text style={styles.reminderTypeText}>Meeting</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.reminderTypeContainer}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#3044F2', marginHorizontal: 5 }} />
                    <Text style={styles.reminderTypeText}>Study</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.reminderTypeContainer}>
                    <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#F29130', marginHorizontal: 5 }} />
                    <Text style={styles.reminderTypeText}>Shopping</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          <View style={{ flex: 3, alignSelf: 'stretch', flexDirection: 'row' }} />
        </View>
      </View>
    </Modal >
  )
}
const styles = {
  addTaskHeading: {
    fontSize: 13,
    fontFamily: "rubik-medium",
    textAlign: 'center'
  },
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
  cancelBtnRowContainer: {
    flex: 0.75,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  cancelBtnContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center'
  },
  headingRowContainer: {
    flex: 0.25,
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  headingContainer: {
    flex: 1,
    alignSelf: 'flex-start',
    alignItems: 'center'
  },

  reminderTypeContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  reminderTypeText: {
    fontFamily: "rubik-regular",
    fontSize: 16,
    color: "#8E8E8E"
  },
  text: {
    fontSize: 20,
    marginLeft: 150
  }
}

export default DisplayModal;