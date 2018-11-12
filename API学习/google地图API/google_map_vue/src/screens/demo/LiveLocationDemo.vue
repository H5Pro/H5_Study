<!--Created by fjl on 2018/11/12-->
<!--实时位置-->
<template>
  <div class="BasicScreen">
    <div
      ref="map"
      class="map"></div>
  </div>
</template>

<script>
const getDistance = (loc1, loc2) => {
  var lat = [loc1.lat, loc2.lat]
  var lng = [loc1.lng, loc2.lng]
  var R = 6378137
  var dLat = (lat[1] - lat[0]) * Math.PI / 180
  var dLng = (lng[1] - lng[0]) * Math.PI / 180
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c
  return Math.round(d)
}
export default {
  data () {
    return {
      map: null,
      paths: [],
      flightPath: null
    }
  },
  watch: {
    paths (v) {
      this.drawPaths(v)
    }
  },
  methods: {
    initMap () {
      navigator.geolocation.getCurrentPosition((position) => {
        const {coords: {latitude: lat, longitude: lng}} = position
        const center = {lat, lng}
        this.map = new google.maps.Map(this.$refs.map, {
          center,
          zoom: 18
        })
        this.paths.push(center)
        this.liveLocation()
      })
    },
    liveLocation () {
      navigator.geolocation.watchPosition((position) => {
        const {coords: {latitude: lat, longitude: lng}} = position
        const newLoc = {lat, lng}
        if (this.paths.length === 0) {
          this.paths.push(newLoc)
        } else {
          const oldLoc = this.paths[this.paths.length - 1]
          const distance = getDistance(newLoc, oldLoc)
          if (distance > 0) {
            this.paths.push(newLoc)
          }
        }
      })
    },
    drawPaths (path) {
      if (this.flightPath) {
        this.flightPath.setMap(null)
      }
      this.flightPath = new google.maps.Polyline({
        path,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      })
      this.flightPath.setMap(this.map)
    }
  },
  mounted () {
    this.initMap()
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
