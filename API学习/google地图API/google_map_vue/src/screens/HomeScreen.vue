<!--Created by fjl on 2018/11/9-->
<template>
  <div class="HomeScreen">
    <router-link class="link" to="/basic">基础</router-link>
    <router-link class="link" to="/route">路线</router-link>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .link{
      margin: 20px;
      font-size: 18px;
    }
  }
</style>
