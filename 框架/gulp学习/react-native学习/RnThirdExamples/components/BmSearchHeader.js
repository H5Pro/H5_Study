/**
 * Created by fjl on 2018/4/13
 */
import React, {Component} from 'react'
import {View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import BmSearchBar from './bm-search-bar'

const DEFALUT_NAVIGATION_HEIGHT = 40

class BmSearchHeader extends Component {
  constructor (props) {
    super(props)
    this.state={
      isFocused: false
    }
  }
  // 点击取消按钮
  clickCancel = () => {
    if (this.props.onCancel && typeof this.props.onCancel === 'function') {
      this.props.onCancel()
    }
  }
  render() {
    const MyButton = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback
    let statusBar = Platform.OS === 'ios' ? <View style={styles.bm_search_header_status}></View> : null
    return (
      <View style={styles.bm_search_header}>
        {statusBar}
        <View style={{
          minHeight: 44,
          justifyContent: 'flex-end'
        }}>
          {
            !this.state.isFocused &&
            <View style={styles.bm_search_header_navigation}>
              <TouchableWithoutFeedback
                onPress={this.clickCancel.bind(this)}

              >
                <View style={styles.bm_search_header_navigation_left_items}>
                  <MyButton
                    onPress={this.clickCancel.bind(this)}
                  >
                    <View style={styles.bm_search_header_navigation_left_button}>
                      <Text style={styles.bm_search_header_navigation_text}>
                        取消
                      </Text>
                    </View>
                  </MyButton>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.bm_search_header_navigation_title}>
                <Text style={styles.bm_search_header_navigation_text}>
                  ddddd
                </Text>
              </View>
            </View>
          }
          <View style={styles.bm_search_header_search}>
            <BmSearchBar
              value={this.props.value}
              onChangeText={text => this.props.onChangeText(text)}
              onCancel={() => {
                this.setState({isFocused: false})
                this.props.onChangeText('')
              }}
              autoFocus={this.state.isFocused}
              onFocus={() => {
                this.setState({isFocused: true})
              }}
              style={{
                backgroundColor: 'transparent',
                paddingVertical: 0,
                marginBottom: 5
              }}
              placeholder={'搜索'}
              cancelTitle={'取消'}
              cancelButtonWidth={70}
              cancelButtonHeight={30}
              cancelButtonTextStyle={{
                fontSize: 16
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bm_search_header: {
    backgroundColor: '#234566'
  },
  bm_search_header_status: {
    height: 20
  },
  bm_search_header_navigation: {
    height: DEFALUT_NAVIGATION_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bm_search_header_navigation_left_items: {
    position: 'absolute',
    left: 0,
    minWidth: 64,
    height: 64,
    top: -20,
    paddingTop: 20,
    paddingBottom: 44 - DEFALUT_NAVIGATION_HEIGHT,
    justifyContent: 'center'
  },
  bm_search_header_navigation_left_button: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10
  },
  bm_search_header_navigation_title: {

  },
  bm_search_header_navigation_text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left'
  },
  bm_search_header_search: {
  }
})

export default BmSearchHeader
