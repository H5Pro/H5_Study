<!--Created by fjl on 2019/6/9-->
<template>
  <div class="HelloWorld">
    <h1>hello HelloWorld!</h1>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
    protected created() {
      console.log(1234);
    }
  }
</script>

<style lang="scss" scoped>
  .HelloWorld {

  }
</style>
