webpackJsonp([5],{"48Hr":function(e,t){},IBPZ:function(e,t,n){e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=231)}({0:function(e,t){e.exports=function(e,t,n,a,i){var r,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,s=e.default);var c,d="function"==typeof s?s.options:s;if(t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),a&&(d._scopeId=a),i?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):n&&(c=n),c){var l=d.functional,u=l?d.render:d.beforeCreate;l?d.render=function(e,t){return c.call(t),u(e,t)}:d.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:s,options:d}}},121:function(e,t){},150:function(e,t,n){var a=n(0)(n(72),n(191),function(e){n(121)},null,null);e.exports=a.exports},191:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mint-radiolist",on:{change:function(t){e.$emit("change",e.currentValue)}}},[n("label",{staticClass:"mint-radiolist-title",domProps:{textContent:e._s(e.title)}}),e._v(" "),e._l(e.options,function(t){return n("x-cell",[n("label",{staticClass:"mint-radiolist-label",slot:"title"},[n("span",{staticClass:"mint-radio",class:{"is-right":"right"===e.align}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"mint-radio-input",attrs:{type:"radio",disabled:t.disabled},domProps:{value:t.value||t,checked:e._q(e.currentValue,t.value||t)},on:{__c:function(n){e.currentValue=t.value||t}}}),e._v(" "),n("span",{staticClass:"mint-radio-core"})]),e._v(" "),n("span",{staticClass:"mint-radio-label",domProps:{textContent:e._s(t.label||t)}})])])})],2)},staticRenderFns:[]}},231:function(e,t,n){e.exports=n(39)},3:function(e,t){e.exports=n("7YS2")},39:function(e,t,n){"use strict";var a=n(150),i=n.n(a);Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return i.a})},4:function(e,t){e.exports=n("lrMw")},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),i=n.n(a);n(4),t.default={name:"mt-radio",props:{title:String,align:String,options:{type:Array,required:!0},value:String},data:function(){return{currentValue:this.value}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}},components:{XCell:i.a}}}})},goBr:function(e,t){},rJIg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("OgVB");var a=n("/Lyv"),i=n.n(a),r=n("Xxa5"),s=n.n(r),o=n("woOf"),c=n.n(o),d=n("exGp"),l=n.n(d),u=(n("goBr"),n("IBPZ")),p=n.n(u),h=(n("f1Vh"),n("ZQVe")),v=n.n(h),f=n("7+uW"),b=n("uWBr"),m=n("j5ea"),_=n("teIl"),w=n("PZVu");f.default.component(v.a.name,v.a),f.default.component(p.a.name,p.a);_.a,m.a;f.default.component(v.a.name,v.a),f.default.component(p.a.name,p.a);var g=null,x={name:"recharge",components:{Header:_.a,BottomBar:m.a},data:function(){return{otherUrl:null,money:null,radio:null,radioOptions:[],cashType:void 0,is_special:0,cashRadio:void 0,cashRadioOptions:[],max:null,min:null,rate:null,isShowBind:!1,clickBindBtn:!1,bind:{name:"",phone:"",id_card:"",validCode:"",bank_card:"",sendCodeCD:0}}},mounted:function(){var e=this.$store.state.User.user||{};this.bind.phone=e.mobile||"",this.bind.name=e.real_name||"",this.getPayCashDesk()},watch:{radio:function(e,t){this.cashRadio=void 0,this.initCashRadioOption(e)}},methods:{getTips:function(){var e="";return null!==this.rate&&(e+="(提示：手续费"+this.rate+"%"),null===this.max&&null===this.min||(e+=""===e?"(提示：入金":"，入金",null!==this.max&&(e+="上限"+this.max+"元"),null!==this.max&&null!==this.min&&(e+="/"),null!==this.min&&(e+="下限"+this.min+"元")),""!==e&&(e+=")"),e},getPayCashDesk:function(){var e=this;return l()(s.a.mark(function t(){var n,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$store.state.User||{},t.next=3,Object(b.N)(n.token);case 3:200===(a=t.sent).code&&function(){var t=[];for(var n in a.data.content){a.data.content[n].forEach(function(e){t.push(c()({label:e.name,value:e.id},e))})}e.radioOptions=t,e.initCashRadioOption(e.radio)}();case 5:case"end":return t.stop()}},t,e)}))()},initCashRadioOption:function(e){var t=this;if(this.cashType=void 0,this.is_special=0,e){var n=[];this.radioOptions.forEach(function(a){a.id===e&&(t.is_special=a.is_special,t.max=a.max,t.min=a.min,t.rate=a.rate,t.cashType=a.type,"1"===a.type?a.banks.forEach(function(e){n.push(c()({},e))}):"2"===a.type&&a.binded.length>0&&a.binded.forEach(function(e){n.push(c()({},e))}))}),this.cashRadioOptions=n}else this.cashRadioOptions=[]},onSendCodeClicked:function(){var e=this;return l()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.bind.phone.length<1)){t.next=3;break}return window.EventBus.$emit("globalMessage","请输入手机号码"),t.abrupt("return");case 3:if(w.a.isPhoneValid(e.bind.phone)){t.next=6;break}return window.EventBus.$emit("globalMessage","请输入正确的手机号码"),t.abrupt("return");case 6:return t.next=8,Object(b._3)(e.bind.phone,e.$store.state.User.uuid);case 8:200===(n=t.sent).code&&window.EventBus.$emit("globalMessage",n.msg),e.bind.sendCodeCD=60,e.startTimer();case 12:case"end":return t.stop()}},t,e)}))()},startTimer:function(){var e=this;g=setInterval(function(){e.bind.sendCodeCD>0?e.bind.sendCodeCD--:clearInterval(g)},1e3)},onSubmit:function(){var e=this;return l()(s.a.mark(function t(){var n,a,r,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.money){t.next=2;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请输入充值金额"));case 2:if(e.radio){t.next=4;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请选择支付通道"));case 4:if("1"!==e.cashType||e.cashRadio){t.next=6;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请选择银行"));case 6:if("2"!==e.cashType||e.cashRadio){t.next=11;break}if(0!==e.cashRadioOptions.length){t.next=10;break}return e.isShowBind=!0,t.abrupt("return");case 10:return t.abrupt("return",window.EventBus.$emit("globalMessage","请选择卡号"));case 11:return n=void 0,a=void 0,"1"===e.cashType?n=e.cashRadio:"2"===e.cashType&&(a=e.cashRadio),r=e.$store.state.User||{},t.next=17,Object(b.P)(e.radio,n,a,e.money,r.token);case 17:if(200===(o=t.sent).code){t.next=20;break}return t.abrupt("return",window.EventBus.$emit("globalMessage",o.msg));case 20:"2"===e.cashType&&1!==e.is_special?i.a.prompt(null,"快捷方式需输入短信验证码",{inputValidator:function(e){return!!e},inputErrorMessage:"短信验证码不能为空"}).then(function(t){var n=t.value;"confirm"===t.action&&e.sendBindSMSCode(n,o.data.content.url)}).catch(function(e){console.log(e)}):e.goThirdUrl(o.data.content.url);case 21:case"end":return t.stop()}},t,e)}))()},onUnbind:function(e){var t=this;return l()(s.a.mark(function n(){var a,i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("2"===t.cashType&&1!==t.is_special){n.next=2;break}return n.abrupt("return");case 2:return a=t.$store.state.User||{},n.next=5,Object(b.Q)(a.token,t.radio,e);case 5:200===(i=n.sent).code&&(t.cashRadio=null,t.getPayCashDesk()),window.EventBus.$emit("globalMessage",i.msg);case 8:case"end":return n.stop()}},n,t)}))()},onShowBind:function(){this.isShowBind=!0,this.clickBindBtn=!0},onCancelShow:function(){this.isShowBind=!1,this.clickBindBtn=!1},onExec:function(){return 1!==this.is_special||this.clickBindBtn?this.onBind():this.specialProPay()},specialProPay:function(){var e=this;return l()(s.a.mark(function t(){var n,a,i,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.bind.name){t.next=2;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请输入姓名"));case 2:if(e.bind.phone){t.next=4;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请输入手机号"));case 4:if(e.bind.id_card){t.next=6;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请输入身份证号"));case 6:if(e.bind.bank_card){t.next=8;break}return t.abrupt("return",window.EventBus.$emit("globalMessage","请输入银行卡号"));case 8:return n=void 0,a=void 0,"1"===e.cashType?n=e.cashRadio:"2"===e.cashType&&(a=e.cashRadio),e.onCancelShow(),i=e.$store.state.User||{},t.next=15,Object(b.P)(e.radio,n,a,e.money,i.token,e.bind.name,e.bind.phone,e.bind.id_card,e.bind.bank_card);case 15:if(200===(r=t.sent).code){t.next=18;break}return t.abrupt("return",window.EventBus.$emit("globalMessage",r.msg));case 18:return t.abrupt("return",e.goThirdUrl(r.data.content.url));case 19:case"end":return t.stop()}},t,e)}))()},onBind:function(){var e=this;return l()(s.a.mark(function t(){var n,a,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$store.state.User||{},t.next=3,Object(b.K)(n.token,e.radio,e.bind.name,e.bind.phone,e.bind.id_card,e.bind.bank_card);case 3:200===(a=t.sent).code&&(r=a.data.content.order_id,i.a.prompt(null,"快捷方式绑定短信验证",{inputValidator:function(e){return!!e},inputErrorMessage:"短信验证码不能为空"}).then(function(t){var n=t.value;"confirm"===t.action&&e.bindConfirm(n,r)}).catch(function(e){console.log(e)}));case 5:case"end":return t.stop()}},t,e)}))()},bindConfirm:function(e,t){var n=this;return l()(s.a.mark(function a(){var i,r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.$store.state.User||{},a.next=3,Object(b.L)(i.token,n.radio,e,t);case 3:200===(r=a.sent).code&&(n.onCancelShow(),n.getPayCashDesk()),window.EventBus.$emit("globalMessage",r.msg);case 6:case"end":return a.stop()}},a,n)}))()},sendBindSMSCode:function(e,t){var n=this;return l()(s.a.mark(function a(){var i,r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.$store.state.User||{},a.next=3,Object(b.M)(i.token,e,t);case 3:r=a.sent,window.EventBus.$emit("globalMessage",r.msg);case 5:case"end":return a.stop()}},a,n)}))()},goThirdUrl:function(e){var t=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);window.android?window.android.gopay(e):t?window.webkit.messageHandlers.gopay.postMessage(e):window.location.href=e}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mfw-page with-header with-bottom"},[n("Header",{attrs:{title:"充值"}}),e._v(" "),n("div",{staticClass:"mfw-page-section mt0 page-recharge"},[n("div",{staticClass:"section-content"},[n("mt-field",{staticClass:"recharge-money",attrs:{label:"金额(￥)",type:"number",placeholder:"请输入充值金额"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}}),e._v(" "),n("div",{staticClass:"re-pay-road clear-fix"},[n("div",{staticClass:"re-title"},[n("span",[e._v("选择支付通道")]),n("span",{staticClass:"span-tips"},[e._v(e._s(e.getTips()))])]),e._v(" "),n("div",{staticClass:"re-content"},e._l(e.radioOptions,function(t){return n("div",{key:"re-road-"+t.id,staticClass:"re-radio re-road"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.radio,expression:"radio"}],attrs:{type:"radio",name:"radio-road",id:"radio-road-"+t.id},domProps:{value:t.id,checked:e._q(e.radio,t.id)},on:{change:function(n){e.radio=t.id}}}),e._v(" "),n("label",{attrs:{for:"radio-road-"+t.id}},[n("div",{staticClass:"re-label-text"},[n("span",[e._v(e._s(t.name))])])])])}))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"1"===e.cashType||"2"===e.cashType,expression:"cashType === '1' || cashType === '2'"}],staticClass:"re-pay-road clear-fix"},[n("div",{staticClass:"re-title"},[n("div",[e._v("选择"+e._s("1"===e.cashType?"银行":"2"===e.cashType?"卡号":""))]),n("div",{directives:[{name:"show",rawName:"v-show",value:"2"===e.cashType,expression:"cashType === '2'"}]},[n("span",{staticClass:"btn-bind",on:{click:e.onShowBind}},[e._v("绑定卡片")])])]),e._v(" "),n("div",{staticClass:"re-content"},e._l(e.cashRadioOptions,function(t){return n("div",{key:"re-bank-"+t.id,class:["re-radio","2"===e.cashType?"re-radio-2":""]},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.cashRadio,expression:"cashRadio"}],attrs:{type:"radio",name:"radio-bank",id:"radio-bank-"+t.id},domProps:{value:t.id,checked:e._q(e.cashRadio,t.id)},on:{change:function(n){e.cashRadio=t.id}}}),e._v(" "),n("label",{attrs:{for:"radio-bank-"+t.id}},[t.logo?n("div",[n("img",{staticClass:"re-label-img",attrs:{src:t.logo}})]):e._e(),e._v(" "),n("div",{staticClass:"re-label-text"},[n("span",[e._v(e._s(t.name||t.bank_card))])])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.is_special,expression:"is_special !== 1"}],staticClass:"btn-bind btn-bind-2",on:{click:function(n){e.onUnbind(t.id)}}},[e._v("解除绑卡")])])}))]),e._v(" "),n("div",{staticClass:"recharge-btn"},[n("button",{staticClass:"mfw-button primary size-lg",on:{click:e.onSubmit}},[e._v("提交")])])],1),e._v(" "),n("mt-popup",{staticClass:"div-popup",attrs:{position:"top"},model:{value:e.isShowBind,callback:function(t){e.isShowBind=t},expression:"isShowBind"}},[n("div",{staticClass:"title text-center"},[e._v(e._s(1!==e.is_special||e.clickBindBtn?"绑定银行卡":"快捷支付"))]),e._v(" "),n("div",{staticClass:"content"},[n("mt-field",{attrs:{placeholder:"请输入姓名",label:"姓名",type:"text"},model:{value:e.bind.name,callback:function(t){e.$set(e.bind,"name",t)},expression:"bind.name"}}),e._v(" "),n("mt-field",{attrs:{placeholder:"请输入11位手机号",label:"手机号",type:"tel"},model:{value:e.bind.phone,callback:function(t){e.$set(e.bind,"phone",t)},expression:"bind.phone"}}),e._v(" "),n("mt-field",{attrs:{placeholder:"请输入身份证号",label:"身份证号",type:"text"},model:{value:e.bind.id_card,callback:function(t){e.$set(e.bind,"id_card",t)},expression:"bind.id_card"}}),e._v(" "),n("mt-field",{attrs:{placeholder:"请输入银行卡号",label:"银行卡号",type:"text"},model:{value:e.bind.bank_card,callback:function(t){e.$set(e.bind,"bank_card",t)},expression:"bind.bank_card"}})],1),e._v(" "),n("div",{staticClass:"btn-popup"},[n("div",[n("button",{staticClass:"mfw-button btn-black size-lg",on:{click:e.onCancelShow}},[e._v("取消")])]),e._v(" "),n("div",[n("button",{staticClass:"mfw-button btn-primary size-lg",on:{click:e.onExec}},[e._v(e._s(1!==e.is_special||e.clickBindBtn?"绑定":"确定"))])])])])],1),e._v(" "),n("BottomBar",{attrs:{selected:3}})],1)])},staticRenderFns:[]};var C=n("VU/8")(x,k,!1,function(e){n("48Hr")},"data-v-7133f86a",null);t.default=C.exports}});
//# sourceMappingURL=5.ca0a1fb16097298a6504.js.map