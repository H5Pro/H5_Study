/**
 * Created by fjl on 2019/6/4
 */
import Vue, {CreateElement, Component} from "vue";
import aa from "./abc";
import bcd from "./bcd";
import "./shims-vue.d";
console.log(bcd);
console.log(aa);
Vue.config.productionTip = false;
import App from "./App.vue";
import "./assets/style/common.scss";

const a = "no shadow";
const print = () => {
	const b = 1234;
	console.log(b);
	console.log(a);
};
console.log(a);
print(); // logs 'shadow'.

new Vue({
	render: (h: CreateElement) => h(App),
}).$mount("#app");
