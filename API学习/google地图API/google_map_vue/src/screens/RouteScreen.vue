<!--Created by fjl on 2018/11/9-->
<!--地图的基本使用-->
<template>
  <div class="RouteScreen">
    <div
      ref="map"
      class="map"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      map: null,
      directionsDisplay: null,
      formAddress: null,
      toAddress: null
    }
  },
  methods: {
    initMap () {
      this.directionsDisplay = new window.google.maps.DirectionsRenderer()
      this.from = new window.google.maps.LatLng(37.7699298, -122.4469157)
      var mapOptions = {
        zoom: 14,
        center: this.from
      }
      this.map = new window.google.maps.Map(this.$refs.map, mapOptions)
      this.directionsDisplay.setMap(this.map)
    },
    calcRoute () {
      var directionsService = new window.google.maps.DirectionsService()
      this.toAddress = new window.google.maps.LatLng(37.7683909618184, -122.51089453697205)
      var selectedMode = 'WALKING'
      var request = {
        origin: this.from,
        destination: this.toAddress,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: window.google.maps.TravelMode[selectedMode]
      }
      directionsService.route(request, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response)
        }
      })
    }
  },
  mounted () {
    this.initMap()
    this.calcRoute()
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
