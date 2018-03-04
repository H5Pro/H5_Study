/* Created by J666 on 2018/1/12 */
import React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import {TabNavigator} from 'react-navigation'

// import Home from '../pages/home'
// import IntelligentInvestment from '../pages/intelligentInvestment'
import Profile from '../pages/profile'

import {px2dp} from './../utils'
import {
  // HOME_PAGE,
  // INTELLIGENT_INVESTMENT,
  PROFILE_PAGE
} from './navigatorNames'

export const TabNavigatorScreen = TabNavigator(
  {
  /*  [HOME_PAGE]: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./../assets/images/tabbar-home.png')}
            style={[styles.icon, {tintColor}]}
          />
        )
      }
    },
    [INTELLIGENT_INVESTMENT]: {
      screen: IntelligentInvestment,
      navigationOptions: {
        tabBarLabel: '智投',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./../assets/images/tabbar-intelligentInvestment.png')}
            style={[styles.icon, {tintColor}]}
          />
        )
      }
    }, */
    [PROFILE_PAGE]: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={require('./../assets/images/tabbar-profile.png')}
            style={[styles.icon, {tintColor}]}
          />
        )
      }
    }
  },
  {
    // initialRouteName: REPORT_FORMS,
    backBehavior: 'none',
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: 'rgb(242, 242, 242)',
        // backgroundColor: 'red',
        borderTopWidth: px2dp(0.5),
        borderColor: 'rgba(228, 228, 228, .1)'
      },
      activeTintColor: 'rgb(110,72,22)',
      inactiveTintColor: 'rgba(166, 166, 166, 1)',
      labelStyle: {
        fontSize: px2dp(12),
        padding: 0,
        margin: 0
      },
      iconStyle: {
        height: px2dp(25),
        padding: 0,
        margin: 0
      },
      indicatorStyle: {
        // backgroundColor: 'rgb(242, 242, 242)',
        // height: 0
        height: 0
      },
      tabStyle: {
        // backgroundColor: 'rgba(242, 242, 242, 0.2)',
        height: px2dp(50)
      },
      showIcon: true,
      // pressColor: "black",
      upperCaseLabel: false
      /*    indicatorStyle: {
                                backgroundColor: '#61CB95',
                            } */
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: px2dp(22),
    height: px2dp(22),
    resizeMode: 'contain'
  }
})
