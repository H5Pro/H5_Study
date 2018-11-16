<template>
  <div>
    <h1>J</h1>
    <div
      @click="go"
      :style="{height: '40px', width: '80px', borderRadius: '4px', border: '1px solid black'}">
      next
    </div>
  </div>
</template>

<script>
  export default {
    name: "J",
    methods: {
      go () {
        this.$router.go(-1)
      }
    },
    destroyed () {
      console.log('J')
    }
  }
</script>

<style scoped>

</style>
