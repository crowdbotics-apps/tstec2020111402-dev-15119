import React from 'react';
import SignUp from './screens/index';
import { createStackNavigator } from 'react-navigation-stack';

const defaultStackSettings = {
  defaultNavigationOptions: ({ navigation }) => ({ header: null }),
}

export default EmailAuthStackScreen = createStackNavigator({
  SignUp,
},
  defaultStackSettings
)