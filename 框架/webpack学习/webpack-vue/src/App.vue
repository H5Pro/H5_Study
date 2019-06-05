<!--Created by fjl on 2019/6/4-->
<template>
  <div class="App">
    <h1>hello App!{{aa}}</h1>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
    private aa: string = '123';
    private created() {
      this.aa = 34579;
    }
  }
</script>

<style lang="scss" scoped>
  .App {

  }
</style>
