webpackJsonp([8],{EO4D:function(t,e){},OXTH:function(t,e,a){"use strict";String,Function;var i={render:function(t){return t("script",{attrs:{type:"text/javascript",src:this.src},ref:"externalJs"})},props:{src:{type:String},loadReady:{type:Function}},mounted:function(){var t=this;this.$refs.externalJs.onload=function(){t.loadReady&&t.loadReady()}}},r=a("VU/8")(i,null,!1,null,null,null);e.a=r.exports},mJq1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),r=a.n(i),n=a("exGp"),o=a.n(n),s=(a("f1Vh"),a("ZQVe")),c=a.n(s),d=a("7+uW"),l=a("uWBr"),u=a("teIl"),m=a("OXTH");d.default.component(c.a.name,c.a);u.a,m.a;d.default.component(c.a.name,c.a);var g="/static/img/profile/icon-user-default@2x.png",p={components:{Header:u.a,externalJs:m.a,VueCropper:function(){return a.e(27).then(a.bind(null,"8rVb"))}},data:function(){return{user_name:"",id_card:"",img_flag:null,id_card_front_img:g,id_card_back_img:g,headPortrait:{show:!1,img:"",info:!1,size:1,outputType:"jpg",autoCropWidth:200,autoCropHeight:200,canScale:!1,autoCrop:!0,showToast:!1,toastTaxt:"图片加载中..."}}},mounted:function(){this.getAuthInfo()},methods:{getAuthInfo:function(){var t=this;return o()(r.a.mark(function e(){var a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.T)(t.$store.state.User.token);case 2:200===(a=e.sent).code&&(i=a.data.user_info||{},t.user_name=i.real_name||"",t.id_card=i.card_id||"",t.id_card_front_img=i.img_1?"data:image/png;base64,"+i.img_1_content:g,t.id_card_back_img=i.img_2?"data:image/png;base64,"+i.img_2_content:g);case 4:case"end":return e.stop()}},e,t)}))()},windowWidthHeight:function(){var t=void 0,e=void 0;return window.innerWidth?t=window.innerWidth:document.documentElement.clientWidth&&(t=document.documentElement.clientWidth),window.innerHeight?e=window.innerHeight:document.documentElement.clientHeight&&(e=document.documentElement.clientHeight),{w:t,h:e}},chooseImg:function(t){this.img_flag=t,"undefined"!==window.canvasResize&&document.getElementById("uploadImgBtn").click()},getImg:function(t){var e=this,a=t.srcElement.files[0];return this.headPortrait.toastTaxt="图片正在加载...",this.headPortrait.showToast=!0,/\.(jpg|jpeg|png|JPG|PNG)$/.test(a.name)?a.size>5242880?(this.headPortrait.showToast=!1,this.toast("图片大小不能超过5M"),!1):void this.fileToDataURL(a,function(t){e.headPortrait.showToast=!1,e.headPortrait.img=t,e.headPortrait.show=!0}):(this.headPortrait.showToast=!1,this.toast("文件类型必须是jpeg,jpg,png中的一种"),!1)},fileToDataURL:function(t,e){var a=new window.FileReader,i=this;a.onload=function(a){window.canvasResize(t,{quality:80,callback:function(t,a,r){var n=i.windowWidthHeight(),o=void 0,s=void 0;if(n.h=n.h-80,a/r>n.w/n.h)if(a<n.w)document.getElementById("crop-container2").style.width=a+"px",document.getElementById("crop-container2").style.height=r+"px",o=a,s=r;else{var c=n.w/a*r;document.getElementById("crop-container2").style.height=c+"px",o=n.w,s=c}if(a/r<n.w/n.h)if(r<n.h)document.getElementById("crop-container2").style.width=a+"px",document.getElementById("crop-container2").style.height=r+"px",o=a,s=r;else{var d=n.h/r*a;document.getElementById("crop-container2").style.width=d+"px",o=d,s=n.h}(o<200||s<200)&&(i.headPortrait.autoCropWidth=i.headPortrait.autoCropHeight=o<s?o:s),e(t),i.headPortrait.showToast=!1}})},a.readAsDataURL(t)},selectImg:function(){var t=this;this.$refs.cropper.getCropData(function(e){1===t.img_flag?t.id_card_front_img=e:t.id_card_back_img=e,t.cancelCrop()})},cancelCrop:function(){this.headPortrait.show=!1,document.getElementById("uploadImgBtn").value="",this.headPortrait.autoCropWidth=this.headPortrait.autoCropHeight=200,document.getElementById("crop-container2").style.width="100%"},dataURLtoFile:function(t,e){for(var a=t.split(","),i=a[0].match(/:(.*?);/)[1],r=atob(a[1]),n=r.length,o=new Uint8Array(n);n--;)o[n]=r.charCodeAt(n);return new File([o],e,{type:i})},onSave:function(){var t=this;return o()(r.a.mark(function e(){var a,i,n,o,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.user_name){e.next=2;break}return e.abrupt("return",window.EventBus.$emit("globalMessage","请填写姓名"));case 2:if(t.id_card){e.next=4;break}return e.abrupt("return",window.EventBus.$emit("globalMessage","请填写身份证号"));case 4:if(t.id_card_front_img&&t.id_card_front_img!==g){e.next=6;break}return e.abrupt("return",window.EventBus.$emit("globalMessage","请选择身份证正面照"));case 6:if(t.id_card_back_img&&t.id_card_back_img!==g){e.next=8;break}return e.abrupt("return",window.EventBus.$emit("globalMessage","请选择身份证反面照"));case 8:return a=t.$store.state.User||{},i=t.dataURLtoFile(t.id_card_front_img,"img_1.png"),n=t.dataURLtoFile(t.id_card_back_img,"img_2.png"),e.next=13,Object(l.S)(a.token,t.user_name,t.id_card,i,n);case 13:return 200===(o=e.sent).code&&((s=t.$store.state.User.user).id_certify_flag="1",t.$store.commit("User/updateUser",s)),e.abrupt("return",window.EventBus.$emit("globalMessage",o.msg));case 16:case"end":return e.stop()}},e,t)}))()}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mfw-page with-header"},[a("Header",{attrs:{title:"实名认证"}}),t._v(" "),a("div",{staticClass:"mfw-page-section"},[a("div",{staticClass:"section-content"},[a("mt-field",{staticClass:"border-bottom",attrs:{label:"姓名",placeholder:"请输入姓名"},model:{value:t.user_name,callback:function(e){t.user_name=e},expression:"user_name"}}),t._v(" "),a("mt-field",{staticClass:"border-bottom",attrs:{label:"身份证",placeholder:"请输入身份证号"},model:{value:t.id_card,callback:function(e){t.id_card=e},expression:"id_card"}}),t._v(" "),a("div",{staticClass:"border-bottom div-id-card"},[a("div",{staticClass:"id-card-img-title"},[t._v("身份证正面照")]),t._v(" "),a("div",{staticClass:"card-img",on:{click:function(e){t.chooseImg(1)}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:"/static/img/profile/icon-user-default@2x.png"!==t.id_card_front_img,expression:"id_card_front_img !== '/static/img/profile/icon-user-default@2x.png'"}],attrs:{src:t.id_card_front_img}})])]),t._v(" "),a("div",{staticClass:"border-bottom div-id-card"},[a("div",{staticClass:"id-card-img-title"},[t._v("身份证反面照")]),t._v(" "),a("div",{staticClass:"card-img",on:{click:function(e){t.chooseImg(2)}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:"/static/img/profile/icon-user-default@2x.png"!==t.id_card_back_img,expression:"id_card_back_img !== '/static/img/profile/icon-user-default@2x.png'"}],attrs:{src:t.id_card_back_img}})])])],1),t._v(" "),a("div",{staticClass:"mt20"},[a("button",{staticClass:"mfw-button primary round size-lg",on:{click:t.onSave}},[t._v("保存")])])]),t._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpg,image/jpeg,image/png",id:"uploadImgBtn"},on:{change:function(e){t.getImg(e)}}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.headPortrait.show,expression:"headPortrait.show"}],staticClass:"head-portrait"},[a("div",{staticClass:"crop-header"},[a("span",{staticClass:"goback icon icon-back",on:{click:t.cancelCrop}},[a("em",{staticClass:"arrow-l big dark2"})]),t._v(" "),a("span",{staticClass:"page-name"},[t._v("图片剪裁")])]),t._v(" "),a("div",{staticClass:"crop-container"},[a("div",{staticClass:"crop-container2",attrs:{id:"crop-container2"}},[a("vueCropper",{ref:"cropper",attrs:{img:t.headPortrait.img,outputSize:t.headPortrait.size,outputType:t.headPortrait.outputType,info:t.headPortrait.info,autoCropWidth:t.headPortrait.autoCropWidth,autoCropHeight:t.headPortrait.autoCropHeight,canScale:t.headPortrait.canScale,autoCrop:t.headPortrait.autoCrop,fixed:!0}})],1)]),t._v(" "),a("div",{staticClass:"crop-btn"},[a("span",{staticClass:"cancel",on:{click:t.cancelCrop}},[t._v("取消")]),t._v(" "),a("span",{staticClass:"commit",on:{click:t.selectImg}},[t._v("选择")])])]),t._v(" "),a("external-js",{attrs:{src:"/static/js/canvas_resize/b-exif-canvasResize.min.js"}})],1)},staticRenderFns:[]};var _=a("VU/8")(p,h,!1,function(t){a("EO4D")},"data-v-e53ca4e6",null);e.default=_.exports}});
//# sourceMappingURL=8.bfb2f2b9f9d842047b69.js.map