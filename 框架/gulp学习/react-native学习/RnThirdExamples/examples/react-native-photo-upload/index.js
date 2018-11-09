/**
 * Created by fjl on 2018/7/26
 */
import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import PhotoUpload from 'react-native-photo-upload'
class Index extends Component {
  render () {
    return (
      <PhotoUpload
        onPhotoSelect={avatar => {
          if (avatar) {
            console.log('Image base64 string: ', avatar)
          }
        }}
      >
        <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode='cover'
          source={{
            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
          }}
        />
      </PhotoUpload>
    )
  }
}

export default Index
