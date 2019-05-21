import React, { Component } from 'react'
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import Images from '../../assets/images';
import Colors from '../../constants/Colors';
import Locale from './../../constants/Locale'
const { width } = Dimensions.get('window');
export default class OnboardingScreen extends Component {

    render() {
        const { main } = Images.Onboarding;
        const { navigate } = this.props.navigation;
        const { title1, title2, Desc, getStartedText } = Locale.Onboarding;

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <View style={styles.centered}>
                        <Image source={main} style={styles.topImage} />
                    </View>
                </View>
                <View style={styles.centered}>
                    <Text style={styles.heading}>{title1}</Text>
                    <View style={[styles.rowView, styles.centered]}>
                        <Text style={styles.heading}>{title2} </Text>
                        <FontAwesome
                            name="heart"
                            size={20}
                            color="red"
                            style={{ marginTop: 2.5 }}
                        />
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{Desc}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.getStartedBtn}
                        onPress={() => navigate("Dashboard")}
                    >
                        <Text style={styles.getStartedText}>{getStartedText}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = {
    btnContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 120,
        marginBottom: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    centered: {
        alignSelf: 'center'
    },
    descriptionContainer: {
        alignSelf: 'center',
        width: width * 0.75,
        marginTop: 20
    },
    descriptionText: {
        textAlign: 'center',
        fontFamily: "opensans-regular",
        color: Colors.descriptionColor
    },
    getStartedBtn: {
        width: 258,
        height: 52,
        backgroundColor: Colors.onboardingBtnBackground,
        justifyContent: 'center',
        borderRadius: 10
    },
    getStartedText: {
        color: Colors.white,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: "opensans-regular",
        fontWeight: '700'
    },
    heading: {
        fontSize: 22,
        fontFamily: "rubik-medium",
        color: Colors.headingColor
    },
    imageContainer: {
        flex: 1,
        alignContent: 'center',
        marginTop: 100
    },
    rowView: {
        flexDirection: 'row',
    },
    topImage: {
        width: 186.17,
        height: 201
    }
}