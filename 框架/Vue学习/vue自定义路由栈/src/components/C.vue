<template>
  <div>
    <h1>C</h1>
    <div
      @click="$router.replace('/d')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      go C
    </div>
    <div
      @click="$router.push('/h')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      go H
    </div>
  </div>
</template>

<script>
  export default {
    name: "C",
    destroyed () {
      console.log('C')
    }
  }
</script>

<style scoped>

</style>
