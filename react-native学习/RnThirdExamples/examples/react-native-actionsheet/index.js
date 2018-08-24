import React from 'react'
import {View, Button, Text} from 'react-native'
import ActionSheet, { ActionSheetCustom } from 'react-native-actionsheet'

const options = [
  'Cancel',
  'Apple',
  <Text style={{color: 'yellow'}}>Banana</Text>,
  'Watermelon',
  <Text style={{color: 'red'}}>Durian</Text>
]

class Demo extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  showCustomActionSheet = () => {
    this.customActionSheet.show()
  }
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Button title={'Open'} onPress={this.showActionSheet} />
        <Button title={'Open Custom'} onPress={this.showCustomActionSheet} />
        <ActionSheetCustom
          ref={o => this.customActionSheet = o}
          title={<Text style={{color: '#000', fontSize: 18}}>Which one do you like?</Text>}
          options={options}
          cancelButtonIndex={0}
          destructiveButtonIndex={4}
          onPress={(index) => { /* do something */ }}
        />
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Which one do you like ?'}
          options={['Apple', 'Banana', 'cancel']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    )
  }
}

export default Demo
