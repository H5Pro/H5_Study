<!--Created by fjl on 2018/11/12-->
<!--实时位置-->
<template>
  <div class="BasicScreen">
    <div
      ref="map"
      class="map"></div>
    <div class="alert" v-show="isGetLoc">获取位置成功</div>
    <div
      class="list">
      <div
        :key="String(index)"
        v-for="(item, index) in list">
        {{item}}
      </div>
    </div>
    <div
      class="count">{{paths.length}}</div>
    <div
      @click="finMe"
      class="location">定位</div>
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
      isGetLoc: false,
      map: null,
      paths: [],
      flightPath: null,
      center: {lat: 39.978192299999996, lng: 116.30596050000001},
      list: []
    }
  },
  watch: {
    paths (v) {
      this.drawPaths(v)
      console.log(v.length)
    }
  },
  methods: {
    finMe () {
      this.map.panTo(this.center)
    },
    initMap () {
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: 18
      })
      navigator.geolocation.getCurrentPosition((position) => {
        this.isGetLoc = true
        const {coords: {latitude: lat, longitude: lng}} = position
        const center = {lat, lng}
        this.center = center
        this.map.setCenter(center)
        this.paths.push(center)
        // 开始实时定位
        this.liveLocation()
      })
    },
    liveLocation () {
      setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          const {coords: {latitude: lat, longitude: lng}} = position
          const newLoc = {lat, lng}
          this.center = newLoc
          if (this.paths.length === 0) {
            this.paths.push(newLoc)
          } else {
            const oldLoc = this.paths[this.paths.length - 1]
            const distance = getDistance(newLoc, oldLoc)
            if (distance > 0) {
              this.paths.push(newLoc)
            }
            if (this.list.length === 0) {
              this.list.push(`${distance}`)
            } else {
              const arr = this.list[this.list.length - 1].split('x')
              const last = arr[0]
              const count = arr.length > 1 ? parseInt(arr[1]) : 1
              if (distance === parseInt(last)) {
                this.list.splice(this.list.length - 1, 1)
                this.list.push(`${last}x${count + 1}`)
              }
            }
          }
        })
      }, 5 * 1000)
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
    position: relative;
    .map{
      flex: 1;
    }
    .alert {
      position: absolute;
      top: -76px;
      right: 0;
      line-height: 40px;
      padding: 10px;
    }
    .location{
      background-color: #fff;
      box-shadow: 0 2px 2px 1px #999;
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 30px;
      line-height: 60px;
    }
    .count{
      background-color: #fff;
      box-shadow: 0 2px 2px 1px #999;
      position: absolute;
      left: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 30px;
      line-height: 60px;
    }
    .list {
      background-color: #fff;
      box-shadow: 0 0px 2px 0px #999;
      position: absolute;
      left: 20px;
      bottom: 100px;
      width: 100px;
      top: 0;
      margin: auto;
      text-align: center;
      border-radius: 10px;
      line-height: 60px;
      overflow: auto;
    }
  }
</style>
