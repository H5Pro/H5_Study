<!--Created by fjl on 2018/11/9-->
<!--路线-->
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
    const from = {lat: 37.7699298, lng: -122.4469157}
    const to = {lat: 37.7683909618184, lng: -122.51089453697205}
    const locs = []
    for (let i = 1; i < 3; i++) {
      for (let j = 1; j < 3; j++) {
        locs.push({
          lat: to.lat - 0.01 * i,
          lng: to.lng + 0.01 * j
        })
      }
    }
    return {
      map: null,
      from,
      to,
      locs,
      directionsServicen: null,
      directionsDisplay: null,
      travelMode: 'WALKING',
      markers: [],
      infowindow: null
    }
  },
  methods: {
    initMap () {
      this.directionsService = new google.maps.DirectionsService()
      this.directionsDisplay = new google.maps.DirectionsRenderer()
      const mapOptions = {
        zoom: 14,
        center: this.from,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.$refs.map, mapOptions)
      this.directionsDisplay.setMap(this.map)
      this.markers = this.locs.map((loc, index) => {
        const marker = new google.maps.Marker({
          position: loc,
          label: String(index)
        })
        marker.addListener('click', async (e) => {
          try {
            const resulut = await this.calcRoute(this.from, e.latLng, this.travelMode)
            const {distance, duration} = resulut.routes[0].legs[0]
            if (!this.infowindow) this.infowindow = new google.maps.InfoWindow({})
            this.infowindow.setContent(distance.text + '    ' + duration.text)
            this.infowindow.open(this.map, marker)
          } catch (e) { console.error(e) }
        })
        return marker
      })
      const markerClusterer = new window.MarkerClusterer(
        this.map,
        this.markers
      )
      console.log(markerClusterer)
    },
    calcRoute (from, to, mode) {
      const request = {
        origin: from,
        destination: to,
        travelMode: google.maps.TravelMode[mode]
      }
      return new Promise((resolve, reject) => {
        this.directionsService.route(request, (response, status) => {
          if (status === 'OK') {
            resolve(response)
            this.directionsDisplay.setDirections(response)
          } else {
            reject(status)
          }
        })
      })
    }
  },
  mounted () {
    this.initMap()
    this.calcRoute(this.from, this.to, this.travelMode)
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
