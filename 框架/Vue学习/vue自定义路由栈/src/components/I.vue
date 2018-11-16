<template>
  <div>
    <h1>I</h1>
    <div
      @click="$router.push('/j')"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      next
    </div>
  </div>
</template>

<script>
  export default {
    name: "I",
    destroyed () {
      console.log('I')
    }
  }
</script>

<style scoped>

</style>
