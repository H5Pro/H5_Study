import React, { Component } from 'react';
import {View} from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
class SegmentExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFirst: false
    }
  }
  render() {
    let {isFirst} = this.state
    return (
      <Container>
        <View style={{flexDirection: 'row'}}>
          <Button
            first
            style={{
              width: '50%',
              height: 50,
              borderColor: 'transparent',
              backgroundColor: isFirst ? 'blue' : '#fff',
              justifyContent: 'center',
              borderRadius: 0
            }}
            active={isFirst}
            onPress={() => {
              this.setState({isFirst: true})
            }}
          >
            <Text>Puppies</Text></Button>
          <Button
            last
            style={{
              width: '50%',
              height: 50,
              borderColor: 'transparent',
              backgroundColor: !isFirst ? 'blue' : '#fff',
              justifyContent: 'center',
              borderRadius: 0
            }}
            active={!this.state.isFirst}
            onPress={() => {
              this.setState({isFirst: false})
            }}
          >
            <Text style={{color: ''}}>Cubs</Text></Button>
        </View>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
      </Container>
    );
  }
}
export default SegmentExample
