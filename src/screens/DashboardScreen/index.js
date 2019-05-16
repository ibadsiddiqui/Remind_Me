import React, { Component } from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import Images from '../../assets/images';
import Colors from '../../constants/Colors'

const { width } = Dimensions.get('window')
export default class DashboardScreen extends Component {

    render() {
        const { emptyTodo, header } = Images.Dashboard
        return (
            <View style={styles.container}>
                <Image source={header} style={{ width: width }} />
                <View style={styles.imageContainer}>
                    <View style={styles.centered}>
                        <Image source={emptyTodo} style={styles.topImage} />
                    </View>
                    <View style={styles.centered}>
                        <Text style={styles.heading}>No tasks</Text>
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
    heading: {
        fontSize: 22,
        fontFamily: "rubik-medium"
    },
    imageContainer: {
        flex: 1,
        alignContent: 'center',
        marginTop: 100
    },
    topImage: {
        width: 119.96,
        height: 164.94
    }
}