/**
 * Created by fjl on 2018/4/13
 */

import React, {Component} from 'react'
import {
  View,
  Modal,
  TouchableOpacity
} from 'react-native'
import BmSearchHeader from './BmSearchHeader'
import BmSearchList from './BmSearchList'
const MyButton = TouchableOpacity
const BACKGROUNG_COLOR = '#F2F2F2'
class BmSearchPickerModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      searchStr: ''
    }
  }
  render() {
    let {children} = this.props
    let content = null
    if (this.state.show) {
      content = <View style={{flex: 1, backgroundColor: BACKGROUNG_COLOR}}>
        <BmSearchHeader
          onCancel={() => {
            this.setState({show: false})
          }}
          value={this.state.searchStr}
          onChangeText={text => {
            this.setState({searchStr: text})
          }}
        />
        <BmSearchList
          onSelect={(item) => {
            this.setState({show: false}, () => {
              this.props.onSelect(item)
            })
          }}
          style={{backgroundColor: 'red'}}
          searchKey={this.props.searchKey}
          searchStr={this.state.searchStr}
          data={this.props.data}
          renderItem={this.props.renderItem}
        />
      </View>
    }
    return (
      <View>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.show}
          onRequestClose={() => {
            this.setState({show: false})
          }}
        >
          {content}
        </Modal>
        <MyButton
          onPress={() => {
            this.setState({show: true})
          }}
        >
          {children}
        </MyButton>
      </View>
    );
  }
}

export default BmSearchPickerModal
