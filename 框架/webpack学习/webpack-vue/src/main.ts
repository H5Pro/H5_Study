/**
 * Created by fjl on 2019/6/4
 */
import './assets/style/common.scss';
import App from './App.vue';
import Vue from 'vue';

new Vue({
  render: (h: Function) => h(App),
}).$mount('#app');
