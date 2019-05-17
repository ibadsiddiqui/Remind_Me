import React, { Component } from 'react'
import { View, Image, Text, Dimensions, ImageBackground } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import Images from '../../assets/images';
import Colors from '../../constants/Colors'

const { width } = Dimensions.get('window')
export default class DashboardScreen extends Component {

    render() {
        const { emptyTodo, header } = Images.Dashboard;
        return (
            <View style={styles.container}>
                <ImageBackground source={header} style={styles.headerImage}>
                    <View style={styles.headerContainer}>
                        <View style={styles.rowView}>
                            <View style={[{ flex: 1 }, styles.centered]}>
                                <Text style={styles.greeting}>Hello Brenda!</Text>
                                <Text style={styles.taskStatus}>Hello Brenda!</Text>
                            </View>
                            <FontAwesome name="user-circle-o" size={40} color="white" />
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.imageContainer}>
                    <View style={styles.centered}>
                        <Image source={emptyTodo} style={styles.topImage} />
                    </View>
                    <View style={[styles.centered, { marginTop: 75 }]}>
                        <Text style={styles.heading}>No tasks</Text>
                        <Text style={styles.description}>You have no task to do.</Text>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    centered: {
        alignSelf: 'center'
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    description: {
        fontSize: 17,
        fontFamily: "opensans-regular",
        textAlign: 'center',
        color: Colors.descriptionColor
    },
    greeting: {
        fontFamily: "rubik-regular",
        fontSize: 17,
        color: Colors.white,
    },
    heading: {
        fontSize: 22,
        fontFamily: "rubik-medium",
        textAlign: 'center',
        color: Colors.headingColor
    },
    headerImage: {
        flex: 1,
        width: width,
        height: 106,
        paddingHorizontal: 20
    },
    imageContainer: {
        flex: 3,
        alignContent: 'center',
        marginTop: 100
    },
    rowView: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 50
    },
    taskStatus: {
        fontFamily: "rubik-regular",
        fontSize: 12,
        color: Colors.white,
    },
    topImage: {
        width: 119.96,
        height: 164.94
    }
}