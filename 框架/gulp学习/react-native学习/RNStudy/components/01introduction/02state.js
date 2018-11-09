/*Created by fjl on 2017/12/31*/
import React, { Component } from 'react';
import { Text } from 'react-native';
export default class Blink extends Component {
  constructor (props) {
    super(props);
    this.state = {showText: true};
    setInterval(() => {
      this.setState(previousSate => {
        return {showText: !previousSate.showText}
      });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
            <Text style={this.props.style}>{display}</Text>
    );
  }
}