import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import OnboardingScreen from './../screens/OnboardingScreen'
import Main from './TabNavigator';
import IndividualCategoryScreen from '../screens/IndividualCategoryScreen';
export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  // Main: MainTabNavigator,
  Onboarding: OnboardingScreen,
  Dashboard: Main,
  IndividualTaskCategory: IndividualCategoryScreen
}, {
    headerMode: "none",
  })
);