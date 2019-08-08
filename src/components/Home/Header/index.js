import { FontAwesome } from "@expo/vector-icons";
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Images from '../../../assets/images';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import Locale from '../../../constants/Locale';
import { filterTodaysTask } from '../../../helpers/listHelpers';
const { width } = Dimensions.get('window');

const Header = (props) => {
    const { header } = Images.Dashboard;
    const { TaskList } = props;
    let condition = TaskList.length === 0 ? [] : filterTodaysTask(TaskList).length == 0 ? [] : filterTodaysTask(TaskList)[0].data;
    let listofTasks = condition;
    return (
        <View style={[Layout.tableRow]}>
            <Image source={header} style={{ width, position: 'absolute' }} />
            <View style={[Layout.tableCell, { paddingHorizontal: 10, marginTop: width * 0.12 }]}>
                <Text style={styles.greeting}>Hello Brenda!</Text>
                <Text style={styles.taskStatus}>{Locale.Tasks.TaskNotification(listofTasks)}</Text>
            </View>
            <View style={[Layout.tableCell, styles.userIconContainer]}>
                <FontAwesome name="user-circle-o" size={40} color="white" />
            </View>
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

export default Header;