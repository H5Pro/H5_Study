<!--Created by fjl on 2018/11/13-->
<template>
  <div class="VuePayKeyboardExample">
    <calculation @confirmEvent="confirmEvent"></calculation>
  </div>
</template>

<script>
import calculation from '../components/calculation'
export default {
  components: {
    calculation
  },
  data () {
    return {
      isPay: false
    }
  },
  methods: {
    confirmEvent (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
  .VuePayKeyboardExample{

  }
</style>
