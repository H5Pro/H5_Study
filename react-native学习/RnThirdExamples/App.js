/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native'
// import ReactNativeSearchList from './examples/react-native-search-list'
// import ReactNativeSearchBox from './examples/react-native-search-box'
// import ReactNativeSearchBar from './examples/react-native-search-bar'
// import BmSearchPickerDemo from './myExample/BmSearchPickerDemo'
// import PopoverExample from './examples/react-native-popover'
// import ModalPopoverExample from './examples/react-native-modal-popover'
// import PopupMenuExample from './examples/react-native-popup-menu'
// import NativeBase from '../RnThirdExamples/examples/native-base'
// import ReactNativeTabView from './examples/react-native-tab-view'
// import QRCodeExample from './examples/react-native-qrcode'
// import SmartBarcodeExample from './examples/react-native-smart-barcode'
// import Web3 from './examples/web3js'
// import PayPasswordExample from './examples/react-native-pay-password'
export default class App extends Component{
  render() {
    return (
    <View style={styles.container} >
      <Text style={styles.iconStyle}></Text>
      <Text style={styles.iconStyle}></Text>
      <Text style={styles.iconStyle}></Text>
      <Text style={styles.iconStyle}></Text>
      <Text style={styles.iconStyle}></Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:width-44,
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
