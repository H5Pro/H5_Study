/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';
// import ReactNativeSearchList from './examples/react-native-search-list'
// import ReactNativeSearchBox from './examples/react-native-search-box'
// import ReactNativeSearchBar from './examples/react-native-search-bar'
import BmPicker from './components/BmSearchPicker'
type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={{marginTop: 20}}>
        <BmPicker
          selectedValue={'3'}
          searchKey={'title,summary'}
          labelKey={'title'}
          data={[
            {
              title: 'btc',
              summary: 'ww',
              value: '2'
            },
            {
              title: 'atc',
              summary: '333',
              value: '3'
            }
          ]}
        ></BmPicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
