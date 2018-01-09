/*Created by fjl on 2018/1/1*/
import React, {Component} from 'react';
import {View, Text} from 'react-native'
class FlexBox extends Component {
  render() {
    return (
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              alignContent: 'flex-start'
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 80, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 80, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 80, backgroundColor: 'steelblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 80, backgroundColor: 'steelblue'}} />
            </View>

    );
  }
}
FlexBox.propTypes = {};
export default FlexBox;








