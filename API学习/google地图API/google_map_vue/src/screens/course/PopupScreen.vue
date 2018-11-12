<!--Created by fjl on 2018/11/12-->
<!--地图弹框-->
<template>
  <div class="PopupScreen">
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
      center: {lat: 1.28000, lng: 103.85000},
      popup: null,
      geocoder: null
    }
  },
  methods: {
    initMap () {
      this.geocoder = new google.maps.Geocoder()
      this.map = new google.maps.Map(this.$refs.map, {
        center: this.center,
        zoom: 10
      })
      this.map.addListener('click', (e) => {
        this.geocoder.geocode({'location': e.latLng}, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              this.popup.setText(results[0].formatted_address)
              this.popup.setPosition(e.latLng)
            } else {
              window.alert('No results found')
            }
          } else {
            window.alert('Geocoder failed due to: ' + status)
          }
        })
      })
    },
    initPopup () {
      this.popup = new Popup(this.$refs.popup.$el, new google.maps.LatLng(this.center.lat, this.center.lng))
      this.popup.setMap(this.map)
    }
  },
  mounted () {
    this.initMap()
    this.initPopup()
  }
}
</script>

<style lang="less">
  .PopupScreen{
    flex: 1;
    display: flex;
    flex-direction: column;
    .map{
      flex: 1;
      .popup-tip-anchor {
        height: 0;
        position: absolute;
        /* The max width of the info window. */
        width: 200px;
      }
      /* The bubble is anchored above the tip. */
      .popup-bubble-anchor {
        position: absolute;
        width: 100%;
        bottom: /* TIP_HEIGHT= */ 8px;
        left: 0;
      }
      /* Draw the tip. */
      .popup-bubble-anchor::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        /* Center the tip horizontally. */
        transform: translate(-50%, 0);
        /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */
        width: 0;
        height: 0;
        /* The tip is 8px high, and 12px wide. */
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: /* TIP_HEIGHT= */ 8px solid white;
      }
      /* The popup bubble itself. */
      .popup-bubble-content {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -100%);
        /* Style the info window. */
        background-color: white;
        padding: 5px;
        border-radius: 5px;
        font-family: sans-serif;
        overflow-y: auto;
        max-height: 60px;
        box-shadow: 0px 2px 10px 1px rgba(0,0,0,0.5);
      }
    }
  }
</style>
