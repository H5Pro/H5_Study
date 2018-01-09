/*Created by fjl on 2018/1/8*/
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
            <Button
            title="Go to Jan`s profile"
            onPress={() => navigate('Profile', { name: 'Jane' })}
            />
    );
  }
}

export default MainScreen;
