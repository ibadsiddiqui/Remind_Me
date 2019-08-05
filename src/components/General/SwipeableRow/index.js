import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'
import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import Colors from '../../../constants/Colors';

export default class SwipeableRow extends Component {
    // renderLeftActions = (progress, dragX) => {
    //     const trans = dragX.interpolate({
    //         inputRange: [0, 50, 100, 101],
    //         outputRange: [-20, 0, 0, 1],
    //     });
    //     return (
    //         <RectButton style={styles.leftAction} onPress={this.close}>
    //             <Animated.Text style={[styles.actionText, { transform: [{ translateX: trans }] }]}>
    //                 Archive
    //             </Animated.Text>
    //         </RectButton>
    //     );
    // };

    renderRightAction = (x, progress) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        // const pressHandler = () => {
        //     this.close();
        //     alert(text);
        // };

        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton onPress={this.close} style={styles.rightAction}>
                    <View style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: Colors.meetingCirlce,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <AntDesign name="delete" size={25} color={Colors.delete} />
                    </View>
                </RectButton>
            </Animated.View>
        );
    };

    renderRightActions = progress => (
        <View style={{ width: 60, flexDirection: 'row' }}>
            {this.renderRightAction(60, progress)}
        </View>
    );

    updateRef = ref => {
        this._swipeableRow = ref;
    };

    close = () => {
        const { deleteTask, item } = this.props;
        this._swipeableRow.close();
        deleteTask(item.taskID);
    };

    render() {
        const { children } = this.props;
        return (
            <Swipeable ref={this.updateRef}
                friction={1}
                leftThreshold={10}
                rightThreshold={10}
                // renderLeftActions={this.renderLeftActions}
                renderRightActions={this.renderRightActions}
            >
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
});