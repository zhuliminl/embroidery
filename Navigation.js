import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/Home';
import SettingScreen from './src/Setting';


const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Setting: {
    screen: SettingScreen
  },
});

export default class RootNavigator extends React.Component {
  render() {
    return <RootStack />;
  }
}


