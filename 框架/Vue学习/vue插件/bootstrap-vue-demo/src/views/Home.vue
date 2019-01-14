<template>
  <div class="home">
    <div id="nav">
      <router-link to="/about">初步使用</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style scoped lang="scss">
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
