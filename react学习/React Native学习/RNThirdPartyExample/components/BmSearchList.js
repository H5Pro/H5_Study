/**
 * Created by fjl on 2018/4/13
 */
import React, {Component} from 'react'
import {View, Text, FlatList, TouchableNativeFeedback, TouchableOpacity, Platform} from 'react-native'

class BmSearchList extends Component {
  render() {
    let MyButton = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback
    let {searchKey, searchStr} = this.props
    let data = this.props.data
    if (searchStr) {
     data = this.props.data.filter((item) => {
       let searchKeys = searchKey.split(',')
       for (var i = 0; i < searchKeys.length; i++) {
         var key = searchKeys[i]
         if (item[key].toLocaleUpperCase().indexOf(searchStr.toLocaleUpperCase()) !== -1) {
          return true
         }
       }
       return false
      })
    }
    return (
      <FlatList
        // style={this.props.style}
        keyExtractor={(item, index) => '' + index}
        data={data}
        renderItem={(item) => {
          const Item = this.props.renderItem(item)
          return <MyButton
          onPress={() => {
            if (this.props.onSelect && typeof this.props.onSelect === 'function') {
              this.props.onSelect(item)
            }
          }}
          >
            {Item}
          </MyButton>
        }}
      />
    );
  }
}

export default BmSearchList
