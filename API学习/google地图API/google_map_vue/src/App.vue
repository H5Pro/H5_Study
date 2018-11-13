<template>
  <div id="app">
    <header
      class="nav_header">
      <div
        @click="back">
        <div
          class="back_home_button">
          返回
        </div>
      </div>
      <div class="title">{{$router.currentRoute.meta.title}}</div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    back () {
      if (this.$router.currentRoute.name !== 'HomeScreen') {
        this.$router.back()
      }
    }
  }
}
</script>

<style lang="less">
  html{
    height: 100%;
  }
  html, body{
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0;
  }
  #app {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
    .nav_header{
      flex: 0 50px;
      background-color: #fff;
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      padding: 5px 5px;
      .back_home_button{
        height: 40px;
        padding: 0 10px 0 0px;
        line-height: 40px;
        background-color: #444;
        margin-left: 20px;
        color: #fff;
        position: relative;
        &:after{
          content: ' ';
          position: absolute;
          top: 0;
          right: 100%;
          border: 20px solid transparent;
          border-right-color: #444;
        }
      }
      .title{
        line-height: 40px;
        font-weight: bold;
        font-size: 18px;
        margin-left: 15px;
      }
    }
}
</style>
