webpackJsonp([26],{"34+y":function(e,t){},"8d21":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("34+y");var o=n("X+yh"),a=n.n(o),r=(n("qONS"),n("UQTY")),i=n.n(r),s=(n("q/am"),n("4VPn")),u=n.n(s),c=n("7+uW"),l=n("sfuR"),p={name:"App",data:function(){return{newsVisible:!1,pageLoading:!1}},components:{NewsContent:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"NI8r"))}},beforeMount:function(){this.$store.commit("User/updateUUID"),l.a.fetchFromCookie("dm_token")&&this.$store.commit("User/updateToken",decodeURIComponent(l.a.fetchFromCookie("dm_token"))),this.$store.dispatch("Stock/updateMarketIndex")},mounted:function(){window.EventBus.$on("show_news",this.showNews),window.EventBus.$on("close_news",this.closeNews),window.EventBus.$on("PAGE_LOADING",this.setPageLoading)},methods:{showNews:function(e){window.history&&window.history.pushState&&window.history.pushState({title:"news",url:"#"},"news","#"),this.newsVisible=!0,window.addEventListener("popstate",this.onPopState,!1),window.$("body").addClass("no-scroll")},closeNews:function(){this.newsVisible=!1,window.$("body").removeClass("no-scroll")},onPopState:function(){window.removeEventListener("popstate",this.onPopState),this.closeNews()},setPageLoading:function(e){this.pageLoading=e}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view"),e._v(" "),n("mt-popup",{attrs:{position:"right"},model:{value:e.newsVisible,callback:function(t){e.newsVisible=t},expression:"newsVisible"}},[n("NewsContent")],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.pageLoading,expression:"pageLoading"}],staticClass:"page-loading"})],1)},staticRenderFns:[]};var m=n("VU/8")(p,d,!1,function(e){n("QvSa"),n("8d21")},null,null).exports,h=n("/ocq");c.default.use(h.a);var f=function(e,t,n){null===l.a.fetchFromCookie("dm_token")?n({path:"/login",query:{backRoute:encodeURIComponent(e.fullPath)}}):n()},v=new h.a({routes:[{path:"/",name:"Home",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("wDQo")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/register",name:"Register",component:function(e){return Promise.all([n.e(0),n.e(14)]).then(function(){var t=[n("kprW")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/login",name:"Login",component:function(e){return Promise.all([n.e(0),n.e(18)]).then(function(){var t=[n("r99a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/resetpass",name:"ResetPass",component:function(e){return Promise.all([n.e(0),n.e(15)]).then(function(){var t=[n("qWqu")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/collection",name:"Collection",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(21)]).then(function(){var t=[n("3Bjx")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/strategy",name:"Strategy",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("3ipT")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/strategy/create/:code",name:"StrategyCreate",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("2Us7")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/profile",name:"Profile",component:function(e){return Promise.all([n.e(0),n.e(24)]).then(function(){var t=[n("aivS")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/activity",name:"Activity",component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("s/Cx")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/recharge",name:"Recharge",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("rJIg")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/withdraw",name:"Withdraw",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("erPL")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/generalize",name:"Generalize",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("3Ckd")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/financialdetails",name:"FinancialDetails",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(16)]).then(function(){var t=[n("2pLM")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/deallog",name:"DealLog",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(19)]).then(function(){var t=[n("Zzio")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/coopagree",name:"CoopAgree",component:function(e){return Promise.all([n.e(0),n.e(23)]).then(function(){var t=[n("bV/9")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/aboutus",name:"AboutUs",component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){var t=[n("o/Yr")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/search",name:"Search",component:function(e){return Promise.all([n.e(0),n.e(22)]).then(function(){var t=[n("IrLP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/stock/:stock_code",name:"Stock",component:function(e){return Promise.all([n.e(0),n.e(17)]).then(function(){var t=[n("TMmi")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/setting",name:"Setting",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("7IAN")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/setnickname",name:"SetNickname",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("6705")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/setdealpass",name:"SetDealPass",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(20)]).then(function(){var t=[n("BiP2")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/bindphone",name:"BindPhone",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("R3MO")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/certification",name:"Certification",beforeEnter:f,component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("mJq1")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});v.beforeEach(function(e,t,n){window.EventBus.$emit("PAGE_LOADING",!0),n()}),v.afterEach(function(e,t){window.EventBus.$emit("PAGE_LOADING",!1)});var _=v,k=n("c2lU"),g=n("NYxO"),w={namespaced:!0,state:{uuid:null,token:null},actions:{},mutations:{updateToken:function(e,t){e.token=t,null===t&&l.a.removeFromCookie("dm_token")},updateUser:function(e,t){e.user=t},updateUUID:function(e){e.uuid=l.a.fetchFromCookie("dm_uuid")}}},b=n("Xxa5"),y=n.n(b),S=n("exGp"),P=n.n(S),E=n("uWBr"),U={namespaced:!0,state:{marketIndexs:[],detailData:{}},getters:{getStockByCode:function(e){return function(t){return e.detailData[t]||{}}}},actions:{updateMarketIndex:function(e){var t=this,n=e.commit;return P()(y.a.mark(function e(){var o;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(o=document.createElement("script")).onload=function(){document.getElementsByTagName("head")[0].removeChild(o),o=null;var e=[];if(window.hq_str_s_sh000001){var t=window.hq_str_s_sh000001.split(",");e.push({stock_code:"sh000001",stock_name:t[0],now_price:t[1],dif_money:parseFloat(t[2]).toFixed(2),dif_rate:t[3]})}if(window.hq_str_s_sz399001){var a=window.hq_str_s_sz399001.split(",");e.push({stock_code:"sz399001",stock_name:a[0],now_price:a[1],dif_money:parseFloat(a[2]).toFixed(2),dif_rate:a[3]})}if(window.hq_str_s_sz399006){var r=window.hq_str_s_sz399006.split(",");e.push({stock_code:"sz399006",stock_name:r[0],now_price:r[1],dif_money:parseFloat(r[2]).toFixed(2),dif_rate:r[3]})}n("updateMarketIndex",e)},o.src=Object(E.k)(),document.getElementsByTagName("head")[0].appendChild(o);case 4:case"end":return e.stop()}},e,t)}))()},updateStock:function(e,t,n){var o=e.commit,a=this;return P()(y.a.mark(function e(){var r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.r)(t,n,!0);case 2:200===(r=e.sent).code&&o("updateStock",r.data);case 4:case"end":return e.stop()}},e,a)}))()}},mutations:{updateMarketIndex:function(e,t){e.marketIndexs=t},updateStock:function(e,t){e.detailData[t.stock_code]=t}}};c.default.use(g.a);var L=new g.a.Store({strict:!1,modules:{User:w,Stock:U}});c.default.component(u.a.name,u.a),c.default.config.productionTip=!1;var x=0,T=null;window.EventBus=k.a,k.a.$on("loadingSet",function(e){!0===e?(x=x<0?0:x,1===(x+=1)&&(null!==T&&clearTimeout(T),i.a.open())):0===(x-=1)&&(T=setTimeout(function(){i.a.close(),T=null},500))}),k.a.$on("globalMessage",function(e){a()({message:e,position:"bottom",duration:3e3})});null===l.a.fetchFromCookie("dm_uuid")&&l.a.saveToCookie("dm_uuid",function(){for(var e=[],t=0;t<36;t++)e[t]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="",e.join("")}(),31536e3),new c.default({el:"#app",store:L,router:_,components:{App:m},template:"<App/>"});var C=function(){document.documentElement.style.fontSize=20*document.documentElement.clientWidth/375+"px"};C(),window.addEventListener("resize",C,!1)},QvSa:function(e,t){},ULTG:function(e,t){},Zbz8:function(e,t,n){"use strict";var o=window.location.host.split("."),a={baseURL:window.__SONGSHU__?window.__SONGSHU__.api[window.location.host]:"http://api."+o[o.length-2]+"."+o[o.length-1],baseURL_TEST:"http://api.dianmai361.com",timeout:3e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};t.a=a},c2lU:function(e,t,n){"use strict";var o=n("7+uW");t.a=new o.default},"q/am":function(e,t){},qONS:function(e,t){},sfuR:function(e,t,n){"use strict";var o={fetchFromLocal:function(e){if(Storage)try{return window.localStorage.getItem(e)}catch(e){return null}},saveToLocal:function(e,t){if(Storage)try{return window.localStorage.setItem(e,t),!0}catch(e){return!1}},removeFromLocal:function(e){if(Storage)try{return window.localStorage.removeItem(e),!0}catch(e){return!1}},fetchFromCookie:function(e,t){var n=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),o=(t||document.cookie).match(n);return void 0!==o&&null!=o?o[2]:null},saveToCookie:function(e,t,n,o){var a=new Date;null!==n&&a.setTime(a.getTime()+1e3*n),document.cookie=e+"="+encodeURIComponent(t)+(null==n?"":";path=/;expires="+a.toGMTString())+(null==o?"":";path=/;domain="+o)},removeFromCookie:function(e){var t=new Date;t.setTime(t.getTime()-1e3);var n=this.fetchFromCookie(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}};t.a=o},uWBr:function(e,t,n){"use strict";var o=n("Xxa5"),a=n.n(o),r=n("exGp"),i=n.n(r),s=(n("34+y"),n("X+yh")),u=n.n(s),c=n("mtWM"),l=n.n(c),p=n("mw3O"),d=n.n(p),m=n("Zbz8"),h=n("c2lU");l.a.defaults.baseURL=window.location.host.indexOf("localhost")>-1?m.a.baseURL_TEST:m.a.baseURL,l.a.defaults.timeout=m.a.timeout,l.a.defaults.headers=m.a.headers,l.a.interceptors.request.use(function(e){return e.silent||h.a.$emit("loadingSet",!0),e},function(e){return h.a.$emit("loadingSet",!1),h.a.$emit("globalMessage","网络异常……"),e}),l.a.interceptors.response.use(function(e){return e.config.silent||(h.a.$emit("loadingSet",!1),200!==e.data.code&&e.data.hasOwnProperty("msg")&&u()({message:""+e.data.msg,position:"bottom",duration:5e3})),e.data},function(e){if(console.error(e),!e.config.silent){var t="服务器开小差了……";"Network Error"===e.message?t="网络异常……":e.message.indexOf("timeout")>-1&&(t="请求超时……"),h.a.$emit("loadingSet",!1),h.a.$emit("globalMessage",t)}return e});var f={post:function(e,t,n,o){var r=this;return i()(a.a.mark(function i(){var s,u;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s={method:"post",url:e},t&&(!o||"application/json;charset=UTF-8"!==o.headers["Content-Type"]&&"multipart/form-data"!==o.headers["Content-Type"]?s.data=d.a.stringify(t):s.data=t),n&&(s.silent=!0),o&&(s.baseURL=o.baseURL||l.a.defaults.baseURL,s.timeout=o.timeout,s.headers=o.headers),a.next=6,l()(s);case 6:return u=a.sent,a.abrupt("return",u);case 8:case"end":return a.stop()}},i,r)}))()},get:function(e,t,n,o){var r=this;return i()(a.a.mark(function i(){var s,u,c;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return(s=t||{}).t=(new Date).getTime(),u={method:"get",url:e,param:s},n&&(u.silent=!0),o&&(u.baseURL=o.baseURL||l.a.defaults.baseURL,u.timeout=o.timeout,u.headers=o.headers),a.next=7,l()(u);case 7:return c=a.sent,a.abrupt("return",c);case 9:case"end":return a.stop()}},i,r)}))()}};t._3=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o={mobile:e,uuid:t};n&&(o.token=n);return f.post("/v1/code/smscode",o)},t.U=function(e,t,n,o,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return f.post("/v1/user/register",{real_name:e,mobile:t,password:n,smscode:o,uuid:a,inviter_id:r})},t.H=function(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return f.post("/v1/user/login",{mobile:e,password:t,code:n,uuid:o,pwd_type:a})},t.I=function(e,t){return f.post("/v1/user/logout",{token:e,uuid:t})},t.e=function(e,t){return v+"/v1/code/captcha?uuid="+e+"&t="+t},t.j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f.post("/v1_home/ad/list",{token:e,page:1,page_size:5},!0)},t.v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f.post("/v1_home/hotpolicy/list",{token:e,page:1,page_size:20},!0)},t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f.post("/v1_home/coupongrant/list",{token:e,page:1,page_size:20},!1)},t.p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f.post("/v1_home/recommendstock/list",{token:e,page:1,page_size:20},!0)},t.w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f.post("/v1_home/hotcustomer/list",{token:e,page:1,page_size:20},!0)},t.l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return f.post("/v1_home/content/list",{token:e,page:1,page_size:20},!1)},t.m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];return f.post("/v1_home/content/detail",{token:e,id:t},!1)},t.i=function(e,t){return f.post("/v1_home/coupongrant/receive",{token:e,coupon_id:t})},t.h=function(e){return f.post("/v1_home/mystock/list",{token:e},!0)},t.E=function(e,t){return f.post("/v1_home/mystock/del",{token:e,stock_code:t})},t.u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return f.post("/v1_home/policy/buyfee",{token:e,stock_code:t,demo_flag:n})},t.y=function(e,t,n){return f.post("/v1_home/policy/coupon",{token:e,init_margin:t,policy_type:n},!0)},t.o=function(e,t){return f.post("/v1_home/policy/mylist",{token:e,page_size:40,page_no:t},!0)},t.g=function(e,t){return f.post("/v1_home/policy/myhistory",{token:e,page_no:t},!0)},t.n=function(e,t){return f.post("/v1_home/policy/posdetail",{token:e,id:t})},t.f=function(e,t){return f.post("/v1_home/policy/hisdetail",{token:e,id:t})},t._1=function(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return f.post("/v1_home/orderpolicy/updatetpsl",{token:e,tp:n,sl:o,money:a,id:t})},t.C=function(e,t){return f.post("/v1_home/orderpolicy/closeaotodelay",{token:e,id:t})},t.Z=function(e,t,n){return f.post("/v1_home/policy/sell",{token:e,policy_id:t,volume:n})},t.A=function(e,t,n,o,a,r,i,s,u){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",l=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,p={token:e,stock_code:t,init_margin:n,leverage:o,assign_price:a,assign_volume:r,policy_type:i,tp:s,sl:u,is_demo:l};return p.coupon_code=c,f.post("/v1_home/policy/buy",p)},t.x=function(e){return f.post("/v1_home/user/user-money",{token:e})},t.k=function(){return"https://bd-hq.sinajs.cn/list=s_sh000001,s_sz399001,s_sz399006"},t.s=function(e,t,n,o){return f.post("/v1_home/stock/search",{keyword:e,page:t,pageSize:n,token:o})},t.b=function(e,t){return f.post("/v1_home/stock/addsearchlog",{stock_code:e,token:t})},t.c=function(e){return f.post("/v1_home/stock/dellog",{token:e})},t.q=function(e,t,n){return f.post("/v1_home/stock/searchlog",{page:e,pageSize:t,token:n})},t.r=function(e,t,n){return f.post("/v1_home/stock/detail",{stock_code:e,token:t},n)},t.t=function(e,t,n){return f.post("/v1_home/stock/marketdetail",{market_code:e,token:t},n)},t._2=function(e){return f.post("/v1_home/user/user-info",{token:e})},t.N=function(e){return f.post("/v1_home/pay/cashdesk",{token:e})},t.P=function(e,t,n,o,a,r,i,s,u){return f.post("/v1_home/pay/preorder",{channel_id:e,bank_code:t,bind_id:n,money:o,token:a,user_name:r,mobile:i,id_card:s,bank_card:u})},t.M=function(e,t,n){for(var o=n.split("/"),a="",r="",i=0;i<o.length;i++)i<3?a+=o[i]+"/":r+="/"+o[i];return f.post(r,{token:e,sms_code:t},{baseURL:a})},t.K=function(e,t,n,o,a,r){return f.post("/v1_home/pay/bindcard",{token:e,channel_id:t,user_name:n,mobile:o,id_card:a,bank_card:r})},t.L=function(e,t,n,o){return f.post("/v1_home/pay/bindcardconfirm",{token:e,channel_id:t,sms_code:n,order_id:o})},t.Q=function(e,t,n){return f.post("/v1_home/pay/unbind",{token:e,channel_id:t,bind_id:n})},t.F=function(e){return f.post("/v1_home/user/history-out-banks",{token:e})},t.G=function(e,t,n,o,a,r,i,s,u){return f.post("/v1_home/user/out-money",{token:e,uuid:t,bank_user_name:n,bank_card:o,bank_province:a,bank_city:r,bank_name:i,branch_name:s,money:u})},t.O=function(e,t,n){return f.post("/v1_home/user/customer-pay-detail",{token:e,page_no:t,page_size:n})},t._0=function(e){return f.post("/v1_home/user/transDetail",{token:e})},t.R=function(e){return f.post("/v1_home/qrcode/inviterurl",{token:e})},t.B=function(e){return f.post("/v1_home/user/cal-profit",{token:e})},t.D=function(e){return f.post("/v1_home/cmscontent/cooperative",{token:e})},t.W=function(e){return f.post("/v1_home/cmscontent/tel",{token:e},!0)},t.z=function(e){return f.post("/v1_home/cmscontent/about-us",{token:e})},t.J=function(e,t){return f.post("/v1_home/user/setNickname",{nick_name:e,token:t})},t.X=function(e,t,n,o,a){return f.post("/v1_home/user/set-fund-pwd",{token:e,uuid:t,fund_pwd:n,re_fund_pwd:o,smscode:a})},t.V=function(e,t,n,o,a){return f.post("/v1/user/get-back-pwd",{uuid:e,mobile:t,password:n,repassword:o,smscode:a})},t.Y=function(e,t){return f.post("/v1_home/user/set-open",{token:e,is_open:t})},t.S=function(e,t,n,o,a){var r=new FormData;return r.append("token",e),r.append("real_name",t),r.append("card_id",n),r.append("img_1",o),r.append("img_2",a),f.post("/v1_home/user/real-auth",r,!1,{headers:{"Content-Type":"multipart/form-data"}})},t.T=function(e){return f.post("/v1_home/user/real-auth-info",{token:e})},t.a=function(e,t){return f.post("/v1_home/mystock/add",{stock_code:e,token:t})};var v=window.location.host.indexOf("local")>-1?m.a.baseURL_TEST:m.a.baseURL}},["NHnr"]);
//# sourceMappingURL=app.ad4a2ddff75727fec13f.js.map