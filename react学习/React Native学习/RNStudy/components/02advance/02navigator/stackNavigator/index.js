
import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './HomePage'
import DetailPage from './DetailPage'

const RootNavigator = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailPage,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
