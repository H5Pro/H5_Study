/**
 * Created by fjl on 2017/6/13.
 */
/*
* get请求
* */


var UrlReq = {
    baseUrl:'http://hhdj.tunnel.2bdata.com/hhdj/',
    user:'user/',
    news:'news/',
    Type_GET:1,
    Type_POST:2,
    Type_GET_O:3,
    Type_POST_O:4
};

/*
 * get请求 (参数传入的是字符串)
 * paramStr:字符串参数
 * */
UrlReq.GET = function (method,paramStr,success){
   UrlReq.XHR(UrlReq.Type_GET,method,paramStr,function(data){
        success(data);
    });
};
/*
 * post请求 (参数传入的是字符串)
 * paramStr:字符串参数
 * */
UrlReq.POST = function (method,paramStr,success){
    UrlReq.XHR(UrlReq.Type_POST,method,paramStr,function(data){
        success(data);
    });
}

/*
 * get请求 (参数传入的是字符串)
 * paramStr:字符串参数
 * */
UrlReq.GET_O = function (method,param,success){
    UrlReq.XHR(UrlReq.Type_GET_O,method,param,function(data){
        success(data);
    });
};
/*
 * post请求 (参数传入的是字符串)
 * paramStr:字符串参数
 * */
UrlReq.POST_O = function (method,param,success){
    UrlReq.XHR(UrlReq.Type_POST_O,method,param,function(data){
        success(data);
    });
}




//公共请求方法
UrlReq.XHR = function(type,method,paramStr,success){

    if(type == UrlReq.Type_GET_O || type == UrlReq.Type_POST_O){
        paramStr = UrlReq.appendUrl(paramStr);
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status>=200 && xhr.status<=300){
                var dataObj = JSON.parse(xhr.responseText);
                console.log('-------响应'+method+'接口--------');
                console.log(dataObj);
                success(dataObj);
            }else {
                alert(xhr.error);
            }
        }
    }

    var methodType = method.slice(0,4);
    var url = UrlReq.baseUrl + UrlReq[methodType]+ method ;

    if(type == UrlReq.Type_GET || type == UrlReq.Type_GET_O){
        url += '?' + paramStr;
        xhr.open('get',url,true);
        xhr.send();
    }else if(type == UrlReq.Type_POST || type == UrlReq.Type_POST_O){
        xhr.open('post',url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(paramStr);
    }

    console.log('-------请求'+method+'接口--------');
    console.log(url);

}

//将参数对象转换为url字符串
UrlReq.appendUrl = function(params) {
    var url = '';
    for (var o in params) {
        var  str = o + "=" + params[o];
        if (url === '')
            url += str;
        else
            url += ("&" + str);
    }
    return url;
}



