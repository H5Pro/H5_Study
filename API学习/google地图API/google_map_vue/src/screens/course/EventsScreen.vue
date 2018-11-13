<!--Created by fjl on 2018/11/10-->
<!--事件-->
<template>
  <div class="RouteScreen">
    <div
      ref="map"
      class="map">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      marker: null
    }
  },
  methods: {
    initMap () {
      const myLatlng = {lat: -25.363, lng: 131.044}
      this.map = new google.maps.Map(this.$refs.map, {
        zoom: 4,
        center: myLatlng
      })
      this.marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map,
        title: 'Click to zoom'
      })
      this.map.addListener('center_changed', () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        setTimeout(() => {
          this.map.panTo(this.marker.getPosition())
        }, 3000)
      })
      this.marker.addListener('click', () => {
        this.map.setZoom(8)
        this.map.setCenter(this.marker.getPosition())
      })
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style lang="less" scoped>
  .RouteScreen{
    flex: 1;
    display: flex;
    flex-direction: column;
    .map{
      flex: 1;
    }
  }
</style>
