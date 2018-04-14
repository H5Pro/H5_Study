/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {View} from 'react-native'
// import ReactNativeSearchList from './examples/react-native-search-list'
// import ReactNativeSearchBox from './examples/react-native-search-box'
// import ReactNativeSearchBar from './examples/react-native-search-bar'
import BmSearchPickerDemo from './myExample/BmSearchPickerDemo'
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <BmSearchPickerDemo />
      </View>
    );
  }
}

