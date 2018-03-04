/* Created by J666 on 2018/1/12 */
import { StackNavigator } from 'react-navigation'
import { TabNavigatorScreen } from './TabNavigator'
import {
  TAB_NAVIGATOR,
  LOGIN_PAGE
} from './navigatorNames'
import LoginPage from '../pages/profile/LoginPage'

export const StackNavigatorScreen = StackNavigator(
  {
    // tab页
    [TAB_NAVIGATOR]: {
      screen: TabNavigatorScreen,
      navigationOptions: {}
    },
    // 登录页面
    [LOGIN_PAGE]: {
      screen: LoginPage,
      navigationOptions: {}
    }
  }
)
