/* Created by fjl on 2018/2/2 */
import React, {Component} from 'react'
import {View, Text} from 'react-native'
import StatusBar from '../../components/StatusBar'
class IntelligentInvestmentPage extends Component {
  static navigationOptions = ({navigation}) => ({
    header: <StatusBar/>
  })
  render() {
    return (
      <View>
        <Text>Hello CalculatorPage</Text>
      </View>
    )
  }
}

export default IntelligentInvestmentPage
