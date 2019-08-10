import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import EditTaskScreen from '../screens/EditTaskScreen';
export default createStackNavigator(
    {
        EditTask: EditTaskScreen
    }, {
        headerMode: "none",
    }
)