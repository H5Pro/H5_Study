import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Highcharts from 'highcharts'
import * as Exporting from 'highcharts/modules/exporting'
Exporting(Highcharts)

// 全局配置，针对页面上所有图表有效
Highcharts.setOptions({
  chart: {
    backgroundColor: {
      linearGradient: [0, 0, 500, 500],
      stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(240, 240, 255)']
      ]
    },
    borderWidth: 2,
    plotBackgroundColor: 'rgba(255, 255, 255, .9)',
    plotShadow: true,
    plotBorderWidth: 1
  },
  credits:{
    enabled: false // 禁用版权信息
  }
});

window.Highcharts = Highcharts
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
