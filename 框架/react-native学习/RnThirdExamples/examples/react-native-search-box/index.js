/**
 * Created by fjl on 2018/4/13
 * react-native 搜索组件
 */

import React, { PureComponent } from 'react';
import { TouchableHightLight, Text, View } from 'react-native';
import Search from '../../../RNThirdPartyExample/components/bm-search-bar/index';

// const rowHeight = 40;

class MyScene extends PureComponent {

  /*state = {
    data: {
      "A": [
        {
          "name": "Anh Tuan Nguyen",
          "age": 28
        },
        {
          "name": "An Nhien",
          "age": 2
        },
      ],
      "Z": [
        {
          "name": "Thanh Tu Pham",
          "age": 32
        },
        {
          "name": "Tien Thanh",
          "age": 24
        },
      ]
    }
  }

  renderRow = (item, sectionId, index) => {
    return (
      <TouchableHightLight
        style={{
          height: rowHeight,
          justifyContent: 'center',
          alignItems: 'center'}}
      >
        <Text>{item.name}</Text>
      </TouchableHightLight>
    );
  }

  // Important: You must return a Promise
  beforeFocus = () => {
    return new Promise((resolve, reject) => {
      console.log('beforeFocus');
      resolve();
    });
  }

  // Important: You must return a Promise
  onFocus = (text) => {
    return new Promise((resolve, reject) => {
      console.log('onFocus', text);
      resolve();
    });
  }

  // Important: You must return a Promise
  afterFocus = () => {
    return new Promise((resolve, reject) => {
      console.log('afterFocus');
      resolve();
    });
  }*/
  render() {
    // inside your render function
    return (
      <View style={{flex: 1}}>
        <Search style={{
          height: 100,
          backgroundColor: 'blue'
        }} />
      </View>
    );
  }
}

export default MyScene