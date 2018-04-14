/**
 * Created by fjl on 2018/4/13
 */

import React, {Component} from 'react'
import {
  View,
  Text,
  Modal,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'
import BmSearchHeader from './BmSearchHeader'
import BmSearchList from './BmSearchList'
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
    const MyButton = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.show}
          onRequestClose={() => {
            this.setState({show: false})
          }}
        >
          <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
            <BmSearchHeader
              onCancel={() => {
                this.setState({show: false})
              }}
              value={this.state.searchStr}
              onChangeText={text => {
                console.log(text)
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
