<!--Created by fjl on 2019/6/8-->
<template>
  <div class="app">
    <h1>hello App1234!</h1>
    <img src="./assets/img/c.jpg" alt="">
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {

  }
</script>

<style lang="scss">
  .app{
    font-size: 14px;
  }
</style>
<style lang="scss" scoped>
  .app {
    background-color: red;
  }
</style>
