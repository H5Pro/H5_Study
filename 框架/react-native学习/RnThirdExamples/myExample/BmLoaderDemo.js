/**
 * Created by fujinliang on 2018/8/5
 */
import React, { Component } from 'react';
import {View, Button, Alert} from 'react-native'
import BmLoader from '../components/BmLoader'
export default class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
      }}>
        <BmLoader
          loading={this.state.loading}
          text={'加载中...'}
        />
        <Button
          title={'点击'}
          onPress={() => {
            this.setState({loading: true})

            setTimeout(() => {
              this.setState({
                loading: false
              })
            }, 3000)
          }}/>
      </View>
    )
  }
}
