import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class TextInputDemo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
            <View style={{width: 200, height: 100, backgroundColor: 'red'}}>
              <Text style={{padding: 10, fontSize: 40}}>
                {this.state.text.split(' ').map((word) => word && '#').join(' ')}
              </Text>
              <TextInput
                      style={{height: 40, backgroundColor: '#cccccc'}}
                      placholder="请输入"
                      onChangeText={(text) => this.setState({text})}
              />
            </View>
    );
  }
}

export default TextInputDemo;
