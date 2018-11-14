import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '../screens/HomeScreen'
import VuePayKeyboardExample from '../screens/VuePayKeyboardExample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
      path: '/vue-pay-keyboard-example',
      name: 'VuePayKeyboardExample',
      component: VuePayKeyboardExample
    }
  ]
})
