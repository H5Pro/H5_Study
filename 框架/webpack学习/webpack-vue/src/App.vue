<!--Created by fjl on 2019/6/9-->
<template>
  <div class="App">
    <h1>hello App!</h1>
    <hello-world />
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';
  import HelloWorld from './HelloWorld.vue';
  @Component({
    components: {HelloWorld}
  })
  export default class App extends Vue {
    protected aa: boolean = false;
    protected created() {
      console.log(1234);
      // const aa = this.$refs.aa as HelloWorld;
      // console.log(aa.created);
    }
  }
</script>

<style lang="scss" scoped>
  .App {

  }
</style>
