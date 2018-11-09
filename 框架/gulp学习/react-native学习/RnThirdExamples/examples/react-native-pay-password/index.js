/**
 * Created by fjl on 2018/7/7
 * 模仿支付宝支付的input组件
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { PasswordInput } from 'react-native-pay-password'
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      password: ''
    }
  }
  render () {
    return (
      <View style={{paddingVertical: 66, alignItems: 'center'}}>
        <Text>password: {this.state.password}</Text>
        <PasswordInput
          borderColor={'#979797'}
          onDone={(data) => {
            this.setState({
              password: data
            })
            console.log(data) }} />
      </View>
    )
  }
}

export default Index
