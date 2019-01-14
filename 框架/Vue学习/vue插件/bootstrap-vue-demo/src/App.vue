<template>
  <div id="app">
    <div
            @click="$router.push({name: 'home'})"
            class="home_logo"
            v-show="$router.currentRoute.name !== 'home'"
    >Home</div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
  .home_logo{
    background-color: #555;
    color: white;
    position: absolute;
    left: 30px;
    top: 10px;
    padding: 10px;
    line-height: 20px;
    border-radius: 5px;
    z-index: 100;
    cursor: pointer;
    &:after{
      content: '';
      position: absolute;
      left: -37px;
      height: 0px;
      width: 0px;
      top: 0;
      bottom: 0;
      margin: auto;
      border: 20px solid transparent;
      border-right-color: #555;
    }
  }
</style>
