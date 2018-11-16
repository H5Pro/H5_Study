<template>
  <div>
    <h1>D</h1>
    <div
      @click="$router.push('/d')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      next
    </div>
  </div>
</template>

<script>
  export default {
    name: "D",
    destroyed () {
      console.log('D')
    }
  }
</script>

<style scoped>

</style>
