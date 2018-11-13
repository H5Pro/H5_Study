<!--Created by fjl on 2018/11/11-->
<!--标注-->
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
      map: null,
      center: {lat: 1.28000, lng: 103.85000},
      markers: [],
      // 用户是否正在拖拽地图
      draging: false,
      geocoder: null,
      curMarker: null
    }
  },
  watch: {
    center () {
      this.showMarkers()
    }
  },
  methods: {
    initMap () {
      this.geocoder = new google.maps.Geocoder()
      this.infowindow = new google.maps.InfoWindow({maxWidth: 300})
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: 17
      })
      this.map.addListener('center_changed', () => {
        if (this.draging) return
        const c = this.map.getCenter()
        this.center = {lat: c.lat(), lng: c.lng()}
      })
      this.map.addListener('dragstart', () => {
        this.draging = true
      })
      this.map.addListener('dragend', () => {
        this.draging = false
        const c = this.map.getCenter()
        this.center = {lat: c.lat(), lng: c.lng()}
      })
      this.showMarkers()
    },
    showMarkers () {
      const locs = []
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const {lat, lng} = this.center
          locs.push({
            lat: lat + i * 0.001,
            lng: lng + j * 0.001
          })
        }
      }
      this.clearMarkers()
      this.markers = locs.map((position) => {
        const image = '../../static/nearcar@2x.png'
        const marker = new google.maps.Marker({
          position,
          map: this.map,
          icon: {
            url: image,
            scaledSize: new google.maps.Size(51, 57)
          }
        })
        marker.addListener('click', () => {
          if (this.curMarker) {
            this.curMarker.setAnimation(null)
          }
          this.curMarker = marker
          this.curMarker.setAnimation(google.maps.Animation.BOUNCE)
          this.geocoder.geocode({'location': this.curMarker.getPosition()}, (results, status) => {
            if (status === 'OK') {
              if (results[0]) {
                this.infowindow.setContent(results[0].formatted_address)
                this.infowindow.open(this.map, marker)
              } else {
                window.alert('No results found')
              }
            } else {
              window.alert('Geocoder failed due to: ' + status)
            }
          })
        })
        return marker
      })
    },
    clearMarkers () {
      this.markers.forEach((marker) => {
        marker.setMap(null)
      })
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
