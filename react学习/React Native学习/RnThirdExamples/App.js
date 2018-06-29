/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {View, Picker} from 'react-native'
// import ReactNativeSearchList from './examples/react-native-search-list'
// import ReactNativeSearchBox from './examples/react-native-search-box'
// import ReactNativeSearchBar from './examples/react-native-search-bar'
// import BmSearchPickerDemo from './myExample/BmSearchPickerDemo'
// import PopoverExample from './examples/react-native-popover'
// import ModalPopoverExample from './examples/react-native-modal-popover'
// import PopupMenuExample from './examples/react-native-popup-menu'
// import NativeBase from '../RnThirdExamples/examples/native-base'
// import ReactNativeTabView from './examples/react-native-tab-view'
import QrCodeScannerExample from './examples/react-native-qrcode-scanner/default'
export default class App extends Component{
  render() {
    return (
      <View style={{marginTop: 20, backgroundColor: '#f2f2f2', flex: 1}}>
        <QrCodeScannerExample />
      </View>
    );
  }
}

