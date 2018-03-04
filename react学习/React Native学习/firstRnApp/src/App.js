/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {AppNavigator} from './navigator';
import LoginPage from './pages/profile/LoginPage';
import NicknamePage from './pages/profile/NicknamePage'
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class App extends Component<{}> {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: true,
      isLoading: false,
      hasNickName: true
    }
    global.$app = this;
    // setTimeout(() => {
    //   this.setState({isLoading: false})
    // }, 2000)

  }
  render() {
    if (this.state.isLoading) { // app加载等待中
      return (
        <View>
          <Text>loading...</Text>
        </View>
      )
    } else if (!this.state.isLogin) { //加载完成，但是用户还没有登录
      return (
        <LoginPage/>
      )
    } else if (!this.state.hasNickName)  { // 用户已经登录，但是并没有填写昵称
      return (
        <NicknamePage/>
      )
    } else { // 用户已经登录, 并且昵称已经填写
      return (
        <AppNavigator/>
      )
    }
  }
}

export default App

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/
