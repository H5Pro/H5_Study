/**
 * Created by fjl on 2017/6/13.
 */
(function(){

    var params = getParams(location.href);
    UrlReq.POST_O('newsContent.do',params,function(obj){
        newsData = obj.data;
        refreshNewsInfo(newsData);

    });
})();

function refreshNewsInfo(newsData){
    var showData =  {item:newsData};
    console.log(showData);
    var tpl = document.getElementById('news_content').innerHTML;
    var html = juicer(tpl, showData);
    var body = document.getElementById('news_info');
    body.innerHTML = html;
}
/*
 * 从url中提取参数对象
 * */
function getParams(urlStr) {
    var params = {};

    var paramStr = urlStr.slice(urlStr.indexOf('?') + 1);
    var paramArr = paramStr.split('&');
    paramArr.forEach(function (item) {
        var arr = item.split('=');
        var key = arr.length > 0 ? arr[0] : null;
        var value = arr.length > 1 ? arr[1] : '';
        if (key) {

            params[key] = value;
        }
    });

    return params;
}
