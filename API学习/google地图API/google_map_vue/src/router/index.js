import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '../screens/HomeScreen'
import BasicScreen from '../screens/BasicScreen'
import RouteScreen from '../screens/RouteScreen'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeScreen',
      component: HomeScreen,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/basic',
      name: 'BasicScreen',
      component: BasicScreen,
      meta: {
        title: '基础'
      }
    },
    {
      path: '/route',
      name: 'RouteScreen',
      component: RouteScreen,
      meta: {
        title: '路线'
      }
    }
  ]
})
