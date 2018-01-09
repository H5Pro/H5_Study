/*Created by fjl on 2018/1/3*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Network extends Component {
  constructor (props) {
    super(props);
    fetch("https://blog.csdn.net/xiangzhihong8")
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            });
  }
  render() {
    return (
            <View>
              <Text>demo</Text>
            </View>
    );
  }
}

export default Network;
