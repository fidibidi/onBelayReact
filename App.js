import React from 'react';
import { View } from 'react-native';

import MainTabNavigator from './Components/MainTabNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <MainTabNavigator />
      </View>
    );
  }
}
