<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div @click="$router.go(-1)">go -1</div>
    <div @click="$router.go(-2)">go -2</div>
    <div @click="$router.go(-3)">go -3</div>
    <div @click="setRootRoute('/i')">set route</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route (to, from) {
      // 更新路由栈信息
      this.updateRouteStack(to, from)
    }
  },
  methods: {
    // 初始化路由栈信息
    initRouteStack () {
      const rt = this.$router
      rt.stack = []
      const {state} = window.history
      rt.state = 'push'
      rt.current = 0
      rt.stack.push(state ? state.key : history.length)
      this.$router.replace = (aa) => {
        this.$router.isReplace = true
        this.$router.history.replace(aa)
      }
    },
    // 更新路由栈信息
    updateRouteStack (to, from) {
      const rt = this.$router
      const {state} = window.history
      if (state) {
        const newIndex = rt.stack.indexOf(state.key)
        if (newIndex < 0) {
          if (rt.isReplace) {
            rt.state = 'replace'
            rt.stack = [state.key]
          } else {
            rt.state = 'push'
            rt.current++
            rt.stack.push(state.key)
          }
        } else {
          const goStep = newIndex - rt.current // 前进或者后退的次数
          if (goStep === 0) {
            if (to.name === from.name || to.path === from.path) {
              // 此情况不存在，可以忽略（vue-route// 相同路由不会刷新或跳转，路由也不会变化）
              rt.state = 'refresh'
            } else {
              rt.state = 'replace'
            }
          } else {
            rt.current = rt.current + goStep
            if (goStep < 0) {
              rt.state = 'back'
              rt.stack = rt.stack.slice(0, rt.current + 1)
            } else {
              // 此情况H5 app不会存在，应为app不会有'前进'按钮
              rt.state = 'forward'
            }
          }
        }
      } else {
        rt.state = 'back'
        rt.current = 0
        rt.stack = [rt.stack[0]]
      }
      if (rt.isReplace) rt.isReplace = false
      console.log(rt.stack)
    },
    // 设置跟路由
    setRootRoute (route) {
      const rt = this.$router
      if (rt.current) {
        this.$router.go(-rt.current)
      }
      setTimeout(() => {
        if (typeof route === 'object') {
          if (route.name === this.$route.name || route.path === this.$route.path) {
            return
          }
        } else if (typeof route === 'string' && route === this.$route.path) {
          return
        }
        this.$router.replace(route)
      }, 50)
    },
  },
  created () {
    // 初始化路由栈信息
    this.initRouteStack()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
