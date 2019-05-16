import React, { Component } from 'react'

import { View, Image } from 'react-native'
import Images from '../../assets/images';

export default class OnboardingScreen extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View>
                    <Image source={Images.Onboarding.main} />
                </View>

            </View>
        )
    }
}