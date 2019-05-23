import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Images from '../../../assets/images';
import Colors from '../../../constants/Colors';
import Locale from '../../../constants/Locale';
const { width } = Dimensions.get('window');

const Header = () => {
    const { header } = Images.Dashboard;
    return (
        <View style={styles.headerImage}>
            <Image source={header} style={{ width, position: 'absolute' }} />
            <View style={[styles.headerContainer]}>
                <View style={styles.rowView}>
                    <View style={[{ flex: 1 }, styles.centered]}>
                        <Text style={styles.greeting}>Hello Brenda!</Text>
                        <Text style={styles.taskStatus}>{Locale.Tasks.NoTaskNotification}</Text>
                    </View>
                    <FontAwesome name="user-circle-o" size={40} color="white" />
                </View>
            </View>
        </View>
    )
};

const styles = {
    centered: {
        alignSelf: 'center'
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