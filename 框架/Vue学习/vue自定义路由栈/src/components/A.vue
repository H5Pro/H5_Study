<template>
  <div>
    <h1>A</h1>
    <div
      @click="$router.push('/b')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      next
    </div>
  </div>
</template>

<script>
  export default {
    name: "A",
    destroyed () {
      console.log('A')
    }
  }
</script>

<style scoped>

</style>
