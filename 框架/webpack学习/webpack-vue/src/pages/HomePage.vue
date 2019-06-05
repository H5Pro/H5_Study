<!--Created by fjl on 2019/6/4-->
<template>
  <div class="home-page">
    <h1>hello HomePage!1234</h1>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      handleClick() {
        console.log(123478);
      }
    },
    created() {
      console.log(1246);
    }
  }
</script>

<style lang="scss" scoped>
  .home-page{
    background-color: red;
  }
</style>
