/*Created by fjl on 2018/1/3*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Network extends Component {
  constructor (props) {
    super(props);
    fetch("https://blog.csdn.net/xiangzhihong8")
            .then(response => {
              this.setState({title: response.url});
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            });
    this.state = {
      title: 123
    }
  }
  render() {
    return (
            <View>
              <Text>{this.state.title}</Text>
            </View>
    );
  }
}

export default Network;
