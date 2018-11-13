<!--Created by fjl on 2018/11/9-->
<!--首页-->
<template>
  <div class="HomeScreen">
    <h1 class="title">教程</h1>
    <div class="container">
      <router-link class="link" to="/basic">基础</router-link>
      <router-link class="link" to="/route">路线</router-link>
      <router-link class="link" to="/events">事件</router-link>
      <router-link class="link" to="/markers">标注</router-link>
    </div>
    <h1 class="title">示例</h1>
    <div class="container">
      <router-link class="link" to="/ofo-nearby-demo">ofo附近车辆demo</router-link>
      <router-link class="link" to="/live-location-demo">实时位置demo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .HomeScreen{
    .title{
      text-align: center;
    }
    .container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .link{
        margin: 20px;
        font-size: 18px;
      }
    }
  }
</style>
