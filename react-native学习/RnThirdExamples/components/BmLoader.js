/**
 * Created by fujinliang on 2018/8/4
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
const DEFALUT_OVERLAY_COLOR = 'transparent'
const DEFALRT_PADDING = 25
class BmLoader extends Component {
  render () {
    const {loading, text, textStyle, style, overlayColor = DEFALUT_OVERLAY_COLOR} = this.props
    return (
      <View style={[
        styles.overlay,
        {
          display: loading ? 'flex' : 'none',
          backgroundColor: overlayColor
        }
      ]}>
        <View style={[styles.container, {paddingVertical: text ? 18 : null}, style]}>
          {
            Platform.OS === 'ios'
              ? <ActivityIndicator
                size="large"
                color="#fff"
              />
              : null
          }
          {
            text && <Text style={[styles.text, textStyle]}>{text}</Text>
          }
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DEFALUT_OVERLAY_COLOR,
  },
  container: {
    padding: DEFALRT_PADDING,
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: 6,
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 17,
    marginTop: 8
  }
})
export default BmLoader
