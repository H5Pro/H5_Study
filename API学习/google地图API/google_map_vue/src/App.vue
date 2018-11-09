<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
  background-color: #f2f2f2;
}
</style>
