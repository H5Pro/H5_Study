/*Created by fjl on 2018/1/31*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Detail extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello {params.title}</Text>
            </View>
    );
  }
}

export default Detail;
