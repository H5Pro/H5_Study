webpackJsonp([27],{"8rVb":function(e,t,o){var r=o("IF+F");e.exports=r},"IF+F":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});String,Number,String,Boolean,Boolean,Boolean,Number,Number,Boolean,Array;var r={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:""}},props:{img:{type:String,default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:Number,default:0},autoCropHeight:{type:Number,default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}}},computed:{cropInfo:function(){return this.cropOffsertY>20?"-20px":"0px"}},watch:{img:function(){var e=this;this.loading=!0,this.scale=1,this.clearCrop(),this.$refs.cropperImg.onload=function(){e.reload()}},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()}},methods:{startMove:function(e){this.move&&!this.crop?(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg),window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),this.moveX=(e.clientX?e.clientX:e.touches[0].clientX)-this.x,this.moveY=(e.clientY?e.clientY:e.touches[0].clientY)-this.y):(this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=e.offsetX?e.offsetX:e.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=e.offsetY?e.offsetY:e.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0)},moveImg:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches[0].clientX,r=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){t.x=~~(o-t.moveX),t.y=~~(r-t.moveY)})},leaveImg:function(e){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg)},scaleImg:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",this.canScale&&window.addEventListener(this.support,this.changeSize)},cancleScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(e){e.deltaY<0?this.scale+=.05:this.scale>.05&&(this.scale-=.05),e.preventDefault()},createCrop:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches?e.touches[0].clientX:0,r=e.clientY?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick(function(){var e=~~(o-t.cropX),c=~~(r-t.cropY);if(e>0?(t.cropW=e+t.cropChangeX>t.w?t.w-t.cropChangeX:e,t.cropOffsertX=t.cropChangeX):(t.cropW=t.w-t.cropChangeX+Math.abs(e)>t.w?t.cropChangeX:Math.abs(e),t.cropOffsertX=t.cropChangeX+e>0?t.cropChangeX+e:0),t.fixed){var n=~~(t.cropW/t.fixedNumber[0]*t.fixedNumber[1]);n+t.cropOffsertY>t.h?(t.cropH=t.h-t.cropOffsertY,t.cropW=~~(t.cropH/t.fixedNumber[1]*t.fixedNumber[0]),t.cropOffsertX=e>0?t.cropChangeX:t.cropChangeX-t.cropW):t.cropH=n,t.cropOffsertY=t.cropOffsertY}else c>0?(t.cropH=c+t.cropChangeY>t.h?t.h-t.cropChangeY:c,t.cropOffsertY=t.cropChangeY):(t.cropH=t.h-t.cropChangeY+Math.abs(c)>t.h?t.cropChangeY:Math.abs(c),t.cropOffsertY=t.cropChangeY+c>0?t.cropChangeY+c:0)})},changeCropSize:function(e,t,o,r,c){window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=t,this.canChangeY=o,this.changeCropTypeX=r,this.changeCropTypeY=c,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0)},changeCropNow:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches?e.touches[0].clientX:0,r=e.clientY?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick(function(){var e=~~(o-t.cropX),c=~~(r-t.cropY);if(t.canChangeX&&(1===t.changeCropTypeX?t.cropOldW-e>0?(t.cropW=t.w-t.cropChangeX-e<=t.w?t.cropOldW-e:t.cropOldW+t.cropChangeX,t.cropOffsertX=t.w-t.cropChangeX-e<=t.w?t.cropChangeX+e:0):(t.cropW=Math.abs(e)+t.cropChangeX<=t.w?Math.abs(e)-t.cropOldW:t.w-t.cropOldW-t.cropChangeX,t.cropOffsertX=t.cropChangeX+t.cropOldW):2===t.changeCropTypeX&&(t.cropOldW+e>0?(t.cropW=t.cropOldW+e+t.cropOffsertX<=t.w?t.cropOldW+e:t.w-t.cropOffsertX,t.cropOffsertX=t.cropChangeX):(t.cropW=t.w-t.cropChangeX+Math.abs(e+t.cropOldW)<=t.w?Math.abs(e+t.cropOldW):t.cropChangeX,t.cropOffsertX=t.w-t.cropChangeX+Math.abs(e+t.cropOldW)<=t.w?t.cropChangeX-Math.abs(e+t.cropOldW):0))),t.canChangeY&&(1===t.changeCropTypeY?t.cropOldH-c>0?(t.cropH=t.h-t.cropChangeY-c<=t.h?t.cropOldH-c:t.cropOldH+t.cropChangeY,t.cropOffsertY=t.h-t.cropChangeY-c<=t.h?t.cropChangeY+c:0):(t.cropH=Math.abs(c)+t.cropChangeY<=t.h?Math.abs(c)-t.cropOldH:t.h-t.cropOldH-t.cropChangeY,t.cropOffsertY=t.cropChangeY+t.cropOldH):2===t.changeCropTypeY&&(t.cropOldH+c>0?(t.cropH=t.cropOldH+c+t.cropOffsertY<=t.h?t.cropOldH+c:t.h-t.cropOffsertY,t.cropOffsertY=t.cropChangeY):(t.cropH=t.h-t.cropChangeY+Math.abs(c+t.cropOldH)<=t.h?Math.abs(c+t.cropOldH):t.cropChangeY,t.cropOffsertY=t.h-t.cropChangeY+Math.abs(c+t.cropOldH)<=t.h?t.cropChangeY-Math.abs(c+t.cropOldH):0))),t.canChangeX&&t.fixed){var n=~~(t.cropW/t.fixedNumber[0]*t.fixedNumber[1]);n+t.cropOffsertY>t.h?(t.cropH=t.h-t.cropOffsertY,t.cropW=~~(t.cropH/t.fixedNumber[1]*t.fixedNumber[0])):t.cropH=n}if(t.canChangeY&&t.fixed){var i=~~(t.cropH/t.fixedNumber[1]*t.fixedNumber[0]);i+t.cropOffsertX>t.w?(t.cropW=t.w-t.cropOffsertX,t.cropH=~~(t.cropW/t.fixedNumber[0]*t.fixedNumber[1])):t.cropW=i}})},changeCropEnd:function(e){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(e){window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop),this.cropX=(e.clientX?e.clientX:e.touches[0].clientX)-this.cropOffsertX,this.cropY=(e.clientY?e.clientY:e.touches[0].clientY)-this.cropOffsertY},moveCrop:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches[0].clientX,r=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){var e=~~(o-t.cropX),c=~~(r-t.cropY);e<=1?t.cropOffsertX=1:~~(e+t.cropW)>t.w?t.cropOffsertX=t.w-t.cropW-1:t.cropOffsertX=e,c<=1?t.cropOffsertY=1:~~(c+t.cropH)>t.h?t.cropOffsertY=t.h-t.cropH-1:t.cropOffsertY=c})},leaveCrop:function(e){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop)},getCropData:function(e){var t=this,o=document.createElement("canvas");o.width=this.cropW,o.height=this.cropH;var r=new Image;r.onload=function(){if(0!=~~o.width){var c=o.getContext("2d"),n=t.x-t.cropOffsertX+t.trueWidth*(1-t.scale)/2,i=t.y-t.cropOffsertY+t.trueHeight*(1-t.scale)/2;c.drawImage(r,n,i,t.trueWidth*t.scale,t.trueHeight*t.scale)}else{o.width=t.trueWidth*t.scale,o.height=t.trueHeight*t.scale,o.getContext("2d").drawImage(r,0,0,t.trueWidth*t.scale,t.trueHeight*t.scale)}var s=o.toDataURL("image/"+t.outputType,t.outputSize);e(s)},r.src=this.img},getCropBlob:function(e){this.getCropData(function(t){for(var o=t.split(","),r=o[0].match(/:(.*?);/)[1],c=atob(o[1]),n=c.length,i=new Uint8Array(n);n--;)i[n]=c.charCodeAt(n);e(window.URL.createObjectURL(new Blob([i],{type:r})))})},showPreview:function(){var e={};e.div={width:this.cropW+"px",height:this.cropH+"px"},e.img={width:this.trueWidth+"px",height:this.trueHeight+"px",transform:"scale("+this.scale+","+this.scale+") translate3d("+(this.x-this.cropOffsertX)/this.scale+"px,"+(this.y-this.cropOffsertY)/this.scale+"px,0)"},e.w=this.cropW,e.h=this.cropH,this.$emit("realTime",e)},reload:function(){var e=this;this.w=~~window.getComputedStyle(this.$refs.cropper).width.replace("px",""),this.h=~~window.getComputedStyle(this.$refs.cropper).height.replace("px",""),this.trueWidth=this.$refs.cropperImg.width,this.trueHeight=this.$refs.cropperImg.height,this.trueWidth>this.w&&(this.scale=this.w/this.trueWidth),this.trueHeight*this.scale>this.h&&(this.scale=this.h/this.trueHeight),this.$nextTick(function(){e.x=-(e.trueWidth-e.trueWidth*e.scale)/2+(e.w-e.trueWidth*e.scale)/2,e.y=-(e.trueHeight-e.trueHeight*e.scale)/2+(e.h-e.trueHeight*e.scale)/2,e.loading=!1,e.autoCrop&&e.goAutoCrop()})},goAutoCrop:function(){this.cropping=!0;var e=this.autoCropWidth,t=this.autoCropHeight;0!==e&&0!==t||(e=.8*this.w,t=.8*this.h),e=e>this.w?this.w:e,t=t>this.h?this.h:t,this.fixed&&(t=e/this.fixedNumber[0]*this.fixedNumber[1]),this.changeCrop(e,t)},changeCrop:function(e,t){this.cropW=e,this.cropH=t,this.cropOffsertX=(this.w-e)/2,this.cropOffsertY=(this.h-t)/2},refresh:function(){}},mounted:function(){var e=this;this.showPreview(),this.$refs.cropperImg.onload=function(){e.reload()}}},c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"cropper",staticClass:"vue-cropper"},[o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+e.x/e.scale+"px,"+e.y/e.scale+"px,0)"}},[o("img",{ref:"cropperImg",attrs:{src:e.img,alt:"cropper-img"}})])]),e._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":e.move&&!e.crop,"cropper-crop":e.crop,"cropper-modal":e.cropping},on:{mousedown:e.startMove,touchstart:e.startMove,mouseover:e.scaleImg,mouseout:e.cancleScale}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:e.cropW+"px",height:e.cropH+"px",transform:"translate3d("+e.cropOffsertX+"px,"+e.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+(e.x-e.cropOffsertX)/e.scale+"px,"+(e.y-e.cropOffsertY)/e.scale+"px,0)"},attrs:{src:e.img,alt:"cropper-img"}})]),e._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:e.cropMove,touchstart:e.cropMove}}),e._v(" "),e.info?o("span",{staticClass:"crop-info",style:{top:e.cropInfo}},[e._v(e._s(this.cropW)+" × "+e._s(this.cropH))]):e._e(),e._v(" "),o("span",{staticClass:"crop-line line-w",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,1)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,1)}}}),e._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,1,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,1,0)}}}),e._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,2)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,2)}}}),e._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,2,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,2,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,1,1)},touchstart:function(t){e.changeCropSize(t,!0,!0,1,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,1)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,2,1)},touchstart:function(t){e.changeCropSize(t,!0,!0,2,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,1,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,1,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,2,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,2,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,1,2)},touchstart:function(t){e.changeCropSize(t,!0,!0,1,2)}}}),e._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,2)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,2)}}}),e._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,2,2)},touchstart:function(t){e.changeCropSize(t,!0,!0,2,2)}}})])])},staticRenderFns:[]};var n=o("VU/8")(r,c,!1,function(e){o("Y5we")},"data-v-23097b3f",null);t.default=n.exports},Y5we:function(e,t){}});
//# sourceMappingURL=27.abf1e44f76141e7dd4dd.js.map