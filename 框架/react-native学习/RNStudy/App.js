import React, {Component} from 'react';
// import StackNavigator from './components/02advance/02navigator/stackNavigator'
import TabNavigator from './components/02advance/02navigator/tabNavigator'
import StackAndTabNavigator from './components/02advance/02navigator/stackAndTabNavigator/navigator/index'



class App extends Component {


  render() {
    const onNavigationStateChange = (prevState, newState, action) => {
      var preRoute = prevState.routes[prevState.routes.length - 1];
      var newRoute = newState.routes[newState.routes.length - 1];
      if (preRoute.routeName !== newRoute.routeName) {
        console.log(preRoute.routeName);
        console.log(newRoute.routeName);
      }
    }
    return (
            <StackAndTabNavigator/>
    )
  }
}

export default  App;