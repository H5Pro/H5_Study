/*Created by fjl on 2018/2/4*/
import React, {Component} from 'react'
import {View, Text} from 'react-native'

class NicknamePage extends Component {
  constructor (props) {
    super (props);
    setTimeout(() => {
      global.$app.setState({hasNickName: true})
    }, 2000)
  }
  render() {
    return (
      <View>
        <Text>Hello NicknamePage</Text>
      </View>
    );
  }
}

export default NicknamePage
