/*Created by fjl on 2018/2/1*/
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
export const HOME_PAGE = 'HOME_PAGE';
import HomePage from '../pages/home/HomePage';
export const PROFILE_PAGE = 'PROFILE_PAGE';
import ProfilePage from '../pages/profile/ProfilePage';

// 从路由名称到路由配置的映射
const RouteConigs = {
  [HOME_PAGE]: {
    screen: HomePage,
    navigationOptions: {
      title: '主页',
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
              <Image
                      source={require('../../../../../assets/image/home.png')}
                      style={[styles.icon, {tintColor}]}
              />
      )
    }
  },
  [PROFILE_PAGE]: {
    screen: ProfilePage,
    navigationOptions: {
      title: '我的',
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
              <Image
                      source={require('../../../../../assets/image/my.png')}
                      style={[styles.icon, {tintColor}]}
              />
      )
    }
  }
};
const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  // swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#5ccc94',
    activeBackgroundColor: '#444',
    inactiveTintColor: '#ccc',
    showLabel: true,
    showIcon: true,
    style: {
      height: 50,
      backgroundColor: '#aaa'
    },
    labelStyle: {
      fontSize: 14
    },
    indicatorStyle: {
      height: 10,
      backgroundColor:  '#5ccc94',

    }

  }
}
const MainScreenNavigator = TabNavigator(RouteConigs, TabNavigatorConfig)

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20
  }
})

export default MainScreenNavigator