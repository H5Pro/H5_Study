/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {View, Clipboard, Button,  StyleSheet, TextInput} from 'react-native'
import QRCode from 'react-native-qrcode';
// import ReactNativeSearchList from './examples/react-native-search-list'
// import ReactNativeSearchBox from './examples/react-native-search-box'
// import ReactNativeSearchBar from './examples/react-native-search-bar'
// import BmSearchPickerDemo from './myExample/BmSearchPickerDemo'
// import PopoverExample from './examples/react-native-popover'
// import ModalPopoverExample from './examples/react-native-modal-popover'
// import PopupMenuExample from './examples/react-native-popup-menu'
// import NativeBase from '../RnThirdExamples/examples/native-base'
// import ReactNativeTabView from './examples/react-native-tab-view'
import BmQrcodeScanner from './components/BmQrcodeScanner' // 扫码功能
export default class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      text: 'http://facebook.github.io/react-native/',
    }
  }

  render() {
    return (
      <View style={{backgroundColor: '#f2f2f2', flex: 1}}>
        {/*<BmQrcodeScanner />*/}
        {/*<Button     // 粘贴板功能
          title={'粘贴'}
          onPress={() => {
            console.log(111)
            Clipboard.setString('hello world')
        }}></Button>*/}
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text: text})}
            value={this.state.text}
          />
          <QRCode
            value={this.state.text}
            size={200}
            bgColor='purple'
            fgColor='white'/>
        </View>
      </View>
    );
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