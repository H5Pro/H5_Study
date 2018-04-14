/**
 * Created by fjl on 2018/4/14
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import BmSearchPicker from '../components/BmSearchPicker'
const data = [
  {
    title: 'btc',
    summary: 'ww',
    value: '2'
  },
  {
    title: 'atc',
    summary: '333',
    value: '3'
  }
]
class BmSearchPickerDemo extends Component {
  constructor (props) {
    super(props)
    this.state= {
      selectedItem: (data && data.length > 0) ? data[0] : {}
    }
  }
  render() {
    let {value: selectedValue = '', title: selectedLabel = ''}= this.state.selectedItem
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 20, padding: 10}}>默认</Text>
        <BmSearchPicker
          selectedValue={selectedValue}
          onSelect={({item}) => {
            this.setState({selectedItem: item})
          }}
          searchKey={'title,summary'}
          labelKey={'title'}
          data={data}
        >
        </BmSearchPicker>
        <Text style={{fontSize: 20, padding: 10}}>自定义</Text>
        <BmSearchPicker
          selectedValue={selectedValue}
          onSelect={({item}) => {
            this.setState({selectedItem: item})
          }}
          searchKey={'title,summary'}
          renderItem={({item}) =>{
            return  (<View style={{backgroundColor: 'red', height: 40}}>
              <Text>{item.title}</Text>
              <Text>{item.summary}</Text>
            </View>)
          }
          }
          data={data}
        >
          <View><Text>{selectedLabel}</Text></View>
        </BmSearchPicker>
      </View>
    );
  }
}

export default BmSearchPickerDemo
