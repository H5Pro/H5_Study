
const randomBytes = require('crypto').randomBytes
console.log(randomBytes)
// /**
//  * Created by fujinliang on 2018/8/21
//  */
//
// import React, {Component} from 'react'
// import {View, Text} from 'react-native'
// const sha256 = require('crypto-js/sha256')
// const AES = require('crypto-js/aes')
// const ENC_UTF8 = require('crypto-js/enc-utf8')
//
// class cryptoJs extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       text: '1223'
//     }
//   }
//   // 创建随机的盐
//   createRandomSalt() {
//     return sha256((Math.random()*10000000).toString(16)+'-'+(new Date()).getTime()+'-'+Math.random().toString()).toString()
//   }
//   componentDidMount () {
//     // 私钥信息
//     const privateKey = '123456777877'
//     // 后端获取的盐
//     const salt = this.createRandomSalt()
//     // 用户输入的PIN码
//     const pin = '123456'
//     const password = sha256(pin + salt).toString()
//     const jmPK = AES.encrypt(privateKey, sha256(password).toString())
//     const result = AES.decrypt(jmPK, sha256(password).toString()).toString(ENC_UTF8)
//     this.setState({text: result})
//   }
//   render () {
//     const {text} = this.state
//     return (
//       <View style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <Text>{text}</Text>
//       </View>
//     )
//   }
// }
//
// export default cryptoJs
