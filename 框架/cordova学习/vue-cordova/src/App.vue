<template>
  <div id="app">
    <!--<router-view/>-->
    <button @click="cameraBTClick">点击</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    cameraBTClick () {
      console.log(1111)
      console.log(navigator.camera)
      // window.Cordova.exec(() => {
      //   console.log(222)
      // }, () => {
      //   console.log(333)
      // }, 'Echo', 'echo', [{key: '1', value: '2'}, {key: '1', value: '2'}])
    }
  }
}
</script>

<style>
  html, body, #app{
    background-color: rgba(0, 0, 0, 0);
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
