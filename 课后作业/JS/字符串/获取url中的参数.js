/**
 * Created by fjl on 17/4/14.
 */

function getParams(url){
    var lastIndex = url.lastIndexOf('?');
    var str = url.substr(lastIndex+1);
    var arr = str.split('&');
    var result = {};
    arr.forEach(function (item) {
     var arr2 =  item.split('=');
     result[arr2[0]] = arr2[1];
    });
    return result;
}
console.log(getParams('http://www.baidu.com?keyword=1234&id=456'));