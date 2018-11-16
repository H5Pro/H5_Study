<template>
  <div>
    <h1>H</h1>
    <div
      @click="$router.push('/i')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      next
    </div>
  </div>
</template>

<script>
  export default {
    name: "H",
    destroyed () {
      console.log('H')
    }
  }
</script>

<style scoped>

</style>
