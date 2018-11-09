/*Created by fjl on 2018/2/1*/
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import { HOME_DETAIL_PAGE } from '../../navigator'
class HomePage extends Component {
  render() {
    return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{color: '#888'}}>Hello HomePage</Text>
              <Button style={{color: '#888'}}
                      title="跳转"
                      onPress={() => this.props.navigation.navigate(HOME_DETAIL_PAGE, {title: '主页详情'})}
              />
            </View>
    );
  }
}

export default HomePage;
