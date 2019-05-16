import React, { Component } from 'react'

import { View, Image, Text } from 'react-native'
import Images from '../../assets/images';
import { FontAwesome } from "@expo/vector-icons";
export default class OnboardingScreen extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={Images.Onboarding.main} style={{ width: 186.17, height: 201 }} />
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text style={{fontSize:22}}>Reminders made simple</Text>
                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <Text style={{fontSize:22}}>Just for You. </Text>
                        <FontAwesome name="heart" size={30} color="red"/>
                    </View>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque erat in blandit luctus.</Text>
                </View>
            </View>
        )
    }
}