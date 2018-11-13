<!--Created by fjl on 2018/11/12-->
<!--ofo附近车辆demo-->
<!--标注-->
<template>
  <div class="BasicScreen">
    <div
      ref="map"
      class="map"></div>
    <google-map-popup ref="popup"/>
  </div>
</template>

<script>
import GoogleMapPopup, {Popup} from '../../components/GoogleMapPopup'
export default {
  components: {GoogleMapPopup},
  data () {
    return {
      map: null,
      origin: {lat: 1.28000, lng: 103.84500},
      dest: {lat: 1.28000, lng: 103.85000},
      markers: [],
      // 用户是否正在拖拽地图
      draging: false,
      geocoder: null,
      curMarker: null,
      travelMode: 'WALKING',
      directionsServicen: null,
      directionsDisplay: null
    }
  },
  watch: {
    dest () {
      this.showMarkers()
    }
  },
  methods: {
    initMap () {
      this.directionsService = new google.maps.DirectionsService()
      this.directionsDisplay = new google.maps.DirectionsRenderer()
      this.geocoder = new google.maps.Geocoder()
      this.infowindow = new google.maps.InfoWindow({maxWidth: 300})
      const mapOptions = {
        zoom: 14,
        center: this.origin,
        disableDefaultUI: true
      }
      this.map = new google.maps.Map(this.$refs.map, mapOptions)
      this.directionsDisplay.setMap(this.map)
      this.showMarkers()
    },
    initPopup (position, content) {
      this.popup = new Popup(this.$refs.popup.$el, position, content)
      this.popup.setMap(this.map)
    },
    showMarkers () {
      const locs = []
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const {lat, lng} = this.dest
          locs.push({
            lat: lat + i * 0.001,
            lng: lng + j * 0.001
          })
        }
      }
      // 清楚
      this.markers.forEach((marker) => {
        marker.setMap(null)
      })
      this.markers = locs.map((position) => {
        const image = '../../static/nearcar@2x.png'
        const marker = new google.maps.Marker({
          position,
          map: this.map,
          // animation: google.maps.Animation.DROP,
          icon: {
            url: image,
            scaledSize: new google.maps.Size(51, 57)
          }
        })
        marker.addListener('click', async () => {
          marker.setAnimation(google.maps.Animation.BOUNCE)
          if (this.curMarker && this.curMarker !== marker) {
            this.curMarker.setAnimation()
          }
          this.curMarker = marker
          try {
            const resulut = await this.calcRoute(this.origin, marker.getPosition(), this.travelMode)
            const {distance, duration} = resulut.routes[0].legs[0]
            let text =
              `时间:${duration.text}
            距离:${distance.text}`
            text = text.replace(/ /g, '')
            if (!this.popup) {
              this.initPopup(marker.getPosition(), text)
            } else {
              this.popup.setPosition(marker.getPosition())
              this.popup.setText(text)
            }
          } catch (e) { console.error(e) }
        })
        return marker
      })
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
    this.calcRoute(this.origin, this.dest, this.travelMode)
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
