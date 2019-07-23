import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { conditionalCircle, conditionalImages } from '../../../../Helpers/styleHelpers';
import Colors from '../../../../constants/Colors';

const Tab = (props) => {
    const { item } = props
    return (
        <View style={styles.insideRowContainer} key={item}>
            <TouchableOpacity style={styles.categoryBtn}>
                <View style={styles.btnContainer}>
                    <View style={conditionalCircle(item)}>
                        <Image source={conditionalImages(item)} style={styles.btnIcon} />
                    </View>
                    <Text style={styles.btnText}>{item}</Text>
                    <Text style={styles.headingNumberOfTask}>24 Task</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    insideRowContainer: {
        flex: 1.8,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginHorizontal: 7,
        elevation: 1,
        borderRadius: 10,
    },

    categoryBtn: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 159,
        height: 180,
    },
    btnContainer: {
        alignItems: 'center'
    },
    btnIcon: {
        width: 35,
        height: 42
    },
    btnText: {
        fontSize: 18,
        fontFamily: "rubik-medium",
        color: Colors.categoryButtonsText,
    },
    headingNumberOfTask: {
        color: Colors.taskCount,
        fontFamily: "rubik-regular",
        fontSize: 12,
        marginTop: 5
    }
}

export default Tab;