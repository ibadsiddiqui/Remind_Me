import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen'
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { View } from 'react-native'
import { AddButton } from './AddButton';
const { activeTintColor, inactiveTintColor } = Colors

const HomeStack = createStackNavigator({
    Home: HomeScreen,
}, {
        headerMode: "none",
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <Feather
                    focused={focused}
                    name="home"
                    size={22}
                    color={focused ? "#5F87E7" : "#9F9F9F"}
                />
            ),
            tabBarOptions: {
                activeTintColor: activeTintColor,
                inactiveTintColor: inactiveTintColor,
            }
        }
    }
);

const TaskStack = createStackNavigator({
    Tasks: TaskScreen,
}, {
        headerMode: "none",
        navigationOptions: {
            tabBarLabel: 'Tasks',
            tabBarIcon: ({ focused }) => (
                <Feather focused={focused} size={22} name='grid'
                    color={focused ? "#5F87E7" : "#9F9F9F"}
                />
            ),
            tabBarOptions: {
                activeTintColor: activeTintColor,
                inactiveTintColor: inactiveTintColor,
            }
        }
    }
);

const AddTask = createSwitchNavigator({
    Tasks: () => null,
}, {
        headerMode: "none",
        navigationOptions: {
            tabBarLabel: <View />,
            tabBarIcon: () => (<AddButton />),
        }
    }
);

export default createBottomTabNavigator({
    HomeStack,
    AddTask,
    TaskStack,
});
