/*Created by fjl on 2018/1/31*/
import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
/*
const RootTabs = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) =>{
        <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{color: tintColor}}
        />
      }
    }
  },
  Profile: {
    screen: ProfilePage,
    tabBarIcon: ({ tintColor, focused }) => {
      <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={26}
              style={{color: tintColor}}
      />
    }
  }
});
export default RootTabs;*/

const RootTabs = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                      name={focused ? 'ios-home' : 'ios-home-outline'}
                      size={26}
                      style={{ color: tintColor }}
              />
      ),
    },
  },
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
              <Ionicons
                      name={focused ? 'ios-person' : 'ios-person-outline'}
                      size={26}
                      style={{ color: tintColor }}
              />
      ),
    },
  },
});

export default RootTabs;
