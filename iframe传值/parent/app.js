/**
 * Created by fjl on 17/4/13.
 * 监听服务端口,绑定入口显示的网页
 */
var express = require('express');
var app = express();
var httpServer = require('http').createServer(app);


app.get('/',function (req,res) {
    res.sendFile(__dirname + '/foreground/index.html');
});
app.use(express.static(__dirname + '/foreground'));


//监听端口(网页程序端口号)
var httpPort =  3000;
httpServer.listen(httpPort, function() {
    console.log('http listening:'+httpPort);
});






