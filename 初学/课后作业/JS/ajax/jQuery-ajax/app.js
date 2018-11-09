/**
 * Created by fjl on 17/6/8.
 */
var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);

//响应客户端的请求(访问该服务地址的客户端)
app.get('/', function (req, res) {
    //将特定网页发送(响应)给客户端
    res.sendFile(__dirname + '/ajax.html');
});
//公开特定目录(让客户端能够访问该目录下的资源)
app.use(express.static(__dirname));

app.all('*', function (req, res) {

    //根据接口中的方法名来调用对应的方法
    var action = req._parsedUrl.pathname.slice(1);

    //设置response编码为utf-8
    //res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    //js变量名的正则表达式
    var reg = /^[a-zA-Z_$][a-zA-Z0-9_$]*/;
    //获取满足变量名的子串数组
    var matchArr = reg.exec(action);
    //方法名称不合法的话,返回错误信息
    if (!matchArr || matchArr[0].length != action.length) {
        res.end('方法名称:' + action + '不合法!');
    } else {
        //获取请求参数
        var param;
        if (req.method == "POST") {
            param = req.body;
        } else {
            param = req.query || req.params;
        }
        res.jsonp({action:action});
    }


});


//监听端口(网页程序端口号)
var httpPort = 3000;
httpServer.listen(httpPort, function () {
    console.log('http listening:' + httpPort);
});