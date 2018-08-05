/**
 * Created by fujinliang on 2018/8/5
 */
import React, { Component } from 'react';
import {View} from 'react-native'
import BmLoader from '../components/BmLoader'
export default class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 600)
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#F5F5F5',
        position: 'relative'
      }}>
        <BmLoader
          loading={this.state.loading}
          text={'加载中...'}
        />
      </View>
    )
  }
}
