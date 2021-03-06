/**
 * Created by fjl on 17/4/25.
 */
function  imgLoad(url){
    return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.open('GET',url);
        request.responseType = "blob";
        request.onload = function(){
            if(request.status == 200){
                resolve(request.response);
            }else {
                reject(Error('Image didn`t load successfully;error code:'+request.statusText));
            }
        }

        request.onerror = function(){
            reject(Error('There was a network error.'));
        }
        request.send();
    });
}


var body = document.querySelector('body');
var myImage = new Image();
imgLoad("1.png").then()