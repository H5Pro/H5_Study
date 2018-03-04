/* Created by J666 on 2018/1/8 */

import {
  Dimensions,
  findNodeHandle,
  UIManager
} from 'react-native'

export const deviceH = Dimensions.get('window').height
export const deviceW = Dimensions.get('window').width

const basePx = 750

export function px2dp (px) {
  return px * deviceW / basePx
}

export function layout (ref) {
  const handle = findNodeHandle(ref)
  if (!handle) {
    return new Promise((resolve) => {
      resolve({})
    })
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        resolve({
          x,
          y,
          width,
          height,
          pageX,
          pageY
        })
      })
    }, 1)
  })
}
