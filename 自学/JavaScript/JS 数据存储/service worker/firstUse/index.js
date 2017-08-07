/**
 * Created by fjl on 17/4/22.
 */


//注册service-worker
if('serviceWorker' in navigator){
   navigator.serviceWorker.register('service-worker.js',{scope:'/'}).then(function(registration){
       console.log('service worker 注册成功' + registration);
   }).cache(function(err){
       console.log('service worker 注册失败' + err);
   });
}


