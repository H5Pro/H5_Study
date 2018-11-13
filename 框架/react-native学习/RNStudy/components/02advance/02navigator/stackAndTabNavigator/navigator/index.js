/*Created by fjl on 2018/2/1*/
import React from 'react';
import { StackNavigator } from 'react-navigation'

export const MAIN_SCREEN = 'MAIN_SCREEN';
import MainScreenNavigator from './MainScreenNavigator'
export const HOME_DETAIL_PAGE = 'HOME_DETAIL_PAGE';
import HomeDetailPage from '../pages/home/HomeDetailPage'
export const PROFILE_DETAIL_PAGE = 'PROFILE_DETAIL_PAGE';
import ProfileDetailPage from '../pages/profile/ProfileDetailPage'
export * from './MainScreenNavigator'
const defalutNavigationOptions = ({ navigation }) => ({
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#5ccc94',
    height: 40
  },
  headerTintColor: '#fff'
});
// 从路由名称到路由配置的映射
const RouteConfigs = {
  [MAIN_SCREEN]: {
    screen: MainScreenNavigator,
    navigationOptions: defalutNavigationOptions
},
  [HOME_DETAIL_PAGE]: {
    screen: HomeDetailPage,
    navigationOptions: defalutNavigationOptions
  },
  [PROFILE_DETAIL_PAGE]: {
    screen: ProfileDetailPage,
    navigationOptions: defalutNavigationOptions
  }
}
// 路由选项配置
const StackNavigatorConfig = {
  headerMode: 'screen',
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: true,
  },
  onTransitionStart: () => {
    console.log(1111)
  },
  onTransitionEnd: () => {
    console.log(2222)
  },

}
const StackAndTabNavigator = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default StackAndTabNavigator;