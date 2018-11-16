<template>
  <div>
    <h1>B</h1>
    <div
      @click="$router.push('/c')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      next
    </div>
  </div>
</template>

<script>
  export default {
    name: "B",
    destroyed () {
      console.log('B')
    }
  }
</script>

<style scoped>

</style>
