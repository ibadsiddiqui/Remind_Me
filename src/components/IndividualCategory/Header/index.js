import { FontAwesome } from "@expo/vector-icons";
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../assets/images';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import Locale from '../../../constants/Locale';
import { filterListWithFlags, filterTodaysTask } from '../../../helpers/listHelpers';
import { profileImagePicker } from "../../../helpers/pickerhelpers";
const { width } = Dimensions.get('window');

const IndividualHeader = (props) => {
    const { header } = Images.Dashboard;
    const { TaskList, flagType, profileImage } = props
    let list = TaskList.length === 0 ? [] : filterTodaysTask(TaskList).length == 0 ? [] : filterTodaysTask(TaskList)[0].data;
    return (
        <View style={[Layout.tableRow]}>
            <Image source={header} style={{ width, position: 'absolute' }} />
            <View style={[Layout.tableCell, { paddingHorizontal: 10, marginTop: width * 0.12 }]}>
                <Text style={styles.greeting}>{flagType} Tasks</Text>
                <Text style={styles.taskStatus}>{Locale.Tasks.TaskNotification(filterListWithFlags(list, flagType))}</Text>
            </View>
            <TouchableOpacity onPress={() => profileImagePicker(props)}
                style={[Layout.tableCell, styles.userIconContainer]}
            >
                {
                    profileImage !== "" ?
                        <Image source={{ uri: profileImage }} style={Layout.profileImage} />
                        : <FontAwesome name="user-circle-o" size={40} color="white" />
                }
            </TouchableOpacity>
        </View >
    )
};

const styles = {
    centered: {
        alignSelf: 'center'
    },
    userIconContainer: {
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        marginTop: width * 0.12
    },
    headerContainer: {
        justifyContent: 'center',
        top: 50
    },
    greeting: {
        fontFamily: "rubik-regular",
        fontSize: 17,
        color: Colors.white,
    },
    headerImage: {
        flex: 1,
        width: width,
        height: 106,
    },
    rowView: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    taskStatus: {
        fontFamily: "rubik-regular",
        fontSize: 12,
        color: Colors.white,
    },
};

export default IndividualHeader;