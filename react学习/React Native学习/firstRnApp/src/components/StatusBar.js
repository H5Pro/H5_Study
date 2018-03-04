/* Created by J666 on 2018/2/3 */
import React from 'react'
import {
  StatusBar
} from 'react-native'

export default function () {
  return (
    <StatusBar
      backgroundColor="rgba(0,0,0,0)"
      barStyle="light-content"
      translucent={true}
      animated={true}
      networkActivityIndicatorVisible={true}
    />
  )
}
