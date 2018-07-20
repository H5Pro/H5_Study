/**
 * Created by fjl on 2018/7/2
 * 测试web3js 中的方法
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { web3 } from 'web3'
class Index extends Component {
  render () {
    return (
      <View>
        <Text>Hello 12212www12</Text>
      </View>
    )
  }
  componentWillMount () {
    alert(1233333)
    let myaddr = web3.eth.Iban.toAddress("XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS")
    console.log(myaddr)
  }
}

export default Index

 