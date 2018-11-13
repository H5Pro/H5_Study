/**
 * Created by fjl on 2018/7/2
 * react native 生成二维码功能
 */

import React, {Component} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import RNQrcode from 'react-native-qrcode'
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'http://facebook.github.io/react-native/',
    }
  }

  render () {
    return (
      <View style={{backgroundColor: '#f2f2f2', flex: 1}}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text: text})}
            value={this.state.text}
          />
          <RNQrcode
            value={this.state.text}
            size={200}
            bgColor='purple'
            fgColor='white'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});

export default Index
