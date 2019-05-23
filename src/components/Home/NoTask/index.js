import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Images from '../../../assets/images';
import Locale from '../../../constants/Locale';
import Colors from '../../../constants/Colors';

const NoTask = () => {
    const { emptyTodo } = Images.Dashboard;
    return (
        <View style={styles.imageContainer}>
            <View style={styles.centered}>
                <Image source={emptyTodo} style={styles.topImage} />
            </View>
            <View style={[styles.centered, { marginTop: 75 }]}>
                <Text style={styles.heading}>{Locale.Tasks.NoTasksHeading}</Text>
                <Text style={styles.description}>{Locale.Tasks.NoTasksDesc}</Text>
            </View>
        </View>
    )
}

const styles = {
    centered: {
        alignSelf: 'center'
    },
    description: {
        fontSize: 17,
        fontFamily: "opensans-regular",
        textAlign: 'center',
        color: Colors.descriptionColor
    },
    heading: {
        fontSize: 22,
        fontFamily: "rubik-medium",
        textAlign: 'center',
        color: Colors.headingColor
    },
    imageContainer: {
        flex: 3,
        alignContent: 'center',
        // marginTop: 50
    },
}

export default NoTask;