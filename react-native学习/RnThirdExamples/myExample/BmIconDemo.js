/**
 * Created by fjl on 2018/7/21
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import BmIcon from '../components/BmIcon'
class BmIconDemo extends Component {
  render () {
    return (
      <View style={{
        marginTop: 40
      }} >
        <View
          style={{
            height: 30,
            borderRadius: 5,
            backgroundColor: '#ff9d62',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <BmIcon
            name={'icon-guanyu'}
            size={22}
            color={'#fff'}
          >
          </BmIcon>
        </View>
        <Text style={styles.iconStyle}>&#xe70c;</Text>
        <Text style={styles.iconStyle}>&#xe60a;</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',
    height: 36,
    marginTop: 2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconStyle: {
    color: 'red',
    fontFamily:'iconfont',
    fontSize: 30
  }
})

export default BmIconDemo
