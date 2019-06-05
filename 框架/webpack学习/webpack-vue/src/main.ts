/**
 * Created by fjl on 2019/6/4
 */
import Vue, {CreateElement} from "vue";

Vue.config.productionTip = false;
import App from "./App.vue";
import "./assets/style/common.scss";

new Vue({
  render: (h: CreateElement) => h(App),
}).$mount("#app");
