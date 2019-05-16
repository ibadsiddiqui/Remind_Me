import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import DashboardScreen from '../screens/DashboardScreen';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const { activeTintColor, inactiveTintColor } = Colors
const HomeStack = createStackNavigator({
    Home: DashboardScreen,
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
    Tasks: DashboardScreen,
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

export default createBottomTabNavigator({
    HomeStack,
    TaskStack,
});
