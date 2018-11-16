import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import D from '@/components/D'
import H from '@/components/H'
import I from '@/components/I'
import J from '@/components/J'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    },
    {
      path: '/c',
      name: 'C',
      component: C
    },
    {
      path: '/d',
      name: 'D',
      component: D
    },
    {
      path: '/h',
      name: 'H',
      component: H
    },
    {
      path: '/i',
      name: 'I',
      component: I
    },
    {
      path: '/j',
      name: 'J',
      component: J
    }
  ]
})

export default router
