/*Created by fjl on 2017/12/31*/
import React, { Component } from 'react';
import { View } from 'react-native';
import Network from './components/01introduction/09network'
export default class FirstComponent extends Component {
  render() {
    return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Network/>
          </View>
    );
  }
}
