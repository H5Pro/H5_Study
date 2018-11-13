/*Created by fjl on 2018/1/31*/
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello Home</Text>
              <Button
                      onPress={() => this.props.navigation.navigate('Details', {title: '详情'})}
                      title="Go to details"
              />
            </View>
    );
  }
}

export default Home;
