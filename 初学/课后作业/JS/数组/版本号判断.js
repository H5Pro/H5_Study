/**
 * Created by fjl on 17/4/11.
 */

function  maxVersion() {

var arr;

if (arguments.length === 1 && arguments[0] instanceof Array){
   arr = arguments[0];
}else {
    arr = [];
    for (i in arguments)
        arr[i] = arguments[i];
}


arr.sort(function (v1,v2) {
    var arr1 = v1.split('.');
    var arr2 = v2.split('.');
    var minLength = (arr1.length > arr2.length)?arr2.length:arr1.length;
    for (var i=0;i<minLength;i++){
        var a = arr1[i];
        var b = arr2[i];
        if(a!==b)
            return parseInt(b)-parseInt(a);
        }
    })
    return arr;
}




var v1 = '2.12';
var v2 = '2.10.4.5.6.7.8';
console.log(maxVersion(v1,v2)[0]);
