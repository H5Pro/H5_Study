/*Created by fjl on 2018/1/2*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MyStyle
extends
Component
{
  render()
  {
    return (
            <View>
              <Text style={styles.red}>style1</Text>
              <Text style={styles.blue}>style2</Text>
              <Text style={styles.gray}>style3</Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
  blue: {
    color: 'blue'
  },
  gray: {
    color: 'gray'
  }
});

export default MyStyle;
