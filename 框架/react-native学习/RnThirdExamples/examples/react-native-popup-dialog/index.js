/**
 * Created by fujinliang on 2018/8/20
 */
import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import PopupDialog, { SlideAnimation, DialogButton } from 'react-native-popup-dialog'
const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
})
class Index extends Component {
  render () {
    return (
      <View style={{paddingTop: 40}}>
        <PopupDialog
          dialogStyle={{
            backgroundColor: 'red',
            width: 300,
            height: 'auto',
            borderRadius: 0
          }}
          slideAnimation={slideAnimation}
          ref={(popupDialog) => { this.popupDialog = popupDialog }}
        >
          <View style={{height: 150, backgroundColor: 'blue'}}>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
        <Button
          title="点击"
          onPress={() => {
            this.popupDialog.show(() => {
              console.log(111111)
            })
          }}
        />
      </View>
    )
  }
}

export default Index
