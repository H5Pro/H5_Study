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
    private aa: number = 123;
    private created() {
      setTimeout(() => {
        this.aa = 3457;
      }, 1000);
    }
  }
</script>

<style lang="scss" scoped>
  .App {

  }
</style>
