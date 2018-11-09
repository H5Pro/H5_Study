/*Created by fjl on 2018/2/1*/
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ProfileDetailPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello ProfileDetailPage</Text>
            </View>
    );
  }
}

export default ProfileDetailPage;
