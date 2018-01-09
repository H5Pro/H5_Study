/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import FirstComponent from './first-component';
import MainScreen from './components/02advance/02navigator/main-screen';
import ProfileScreen from './components/02advance/02navigator/profile-screen';
import {
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
const App = StackNavigator({
  Main: {screan: MainScreen},
  Profile: {screen: ProfileScreen}
})

export default class RNApp extends Component {
  render() {
    return (
            <FirstComponent/>
    );
  }
}


AppRegistry.registerComponent('RNApp', () => RNApp);
