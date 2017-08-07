/**
 * Created by fjl on 17/6/9.
 */
var urlStr = 'http://127.0.0.1:3000/login?tel=123&password=111';
console.log("--------请求"+'login'+"接口--------\n"+urlStr);
$.ajax({
    url: urlStr,
     //url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18848962883',
    type: 'GET',
    dataType: 'jsonp',

    success: function (data, textStatus) {
        console.log("--------"+'login'+"接口返回的数据--------\n");
        console.log(data);

    },

    error: function (error) {
        console.log("--------请求接口错误信息--------\n"+JSON.stringify(error));
    }


})