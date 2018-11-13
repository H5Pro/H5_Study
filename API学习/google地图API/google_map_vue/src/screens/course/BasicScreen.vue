<!--Created by fjl on 2018/11/9-->
<!--地图的基本使用-->
<template>
  <div class="BasicScreen">
    <div
      ref="map"
      class="map"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.map = new google.maps.Map(this.$refs.map, {
      center: {lat: 1.28000, lng: 103.85000},
      zoom: 10
    })
  }
}
</script>

<style lang="less" scoped>
  .BasicScreen{
    flex: 1;
    display: flex;
    flex-direction: column;
    .map{
     flex: 1;
    }
  }
</style>
