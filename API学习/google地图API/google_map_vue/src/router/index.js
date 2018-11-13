import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '../screens/HomeScreen'
import BasicScreen from '../screens/course/BasicScreen'
import RouteScreen from '../screens/course/RouteScreen'
import EventsScreen from '../screens/course/EventsScreen'
import MarkersScreen from '../screens/course/MarkersScreen'
import PopupScreen from '../screens/course/PopupScreen'
import OfoNearbyDemo from '../screens/demo/OfoNearbyDemo'
import LiveLocationDemo from '../screens/demo/LiveLocationDemo'
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
    },
    {
      path: '/events',
      name: 'EventsScreen',
      component: EventsScreen,
      meta: {
        title: '事件'
      }
    },
    {
      path: '/markers',
      name: 'MarkersScreen',
      component: MarkersScreen,
      meta: {
        title: '标注'
      }
    },
    {
      path: '/popup',
      name: 'PopupScreen',
      component: PopupScreen,
      meta: {
        title: 'popup'
      }
    },
    {
      path: '/ofo-nearby-demo',
      name: 'OfoNearbyDemo',
      component: OfoNearbyDemo,
      meta: {
        title: 'ofo附近车辆demo'
      }
    },
    {
      path: '/live-location-demo',
      name: 'LiveLocationDemo',
      component: LiveLocationDemo,
      meta: {
        title: '实时位置demo'
      }
    }
  ]
})
