/*Created by fjl on 2017/12/31*/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
export default class HeightAndWidth extends Component {
  render() {
    return (
            <View style={styles.HeightAndWidth}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
              </View>
            </View>
    )
  };
};
const styles = StyleSheet.create({
  HeightAndWidth: {
    width: 200,
    height: 100,
    backgroundColor: 'red'
  }
});

