/*Created by fjl on 2018/2/1*/
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { PROFILE_DETAIL_PAGE } from '../../navigator'
class ProfilePage extends Component {

  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello ProfilePage</Text>
              <Button
                      title="跳转"
                      onPress={() => this.props.navigation.navigate(PROFILE_DETAIL_PAGE, {title: '个人详情'})}

              />
            </View>
    );
  }
}

export default ProfilePage;
