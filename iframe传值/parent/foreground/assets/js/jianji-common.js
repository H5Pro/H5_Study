/** 添加meta信息，如果不是本地环境就将http请求改为https **/
if (location.hostname != 'localhost' && !location.hostname.startsWith('192.168')) {
    var meta="<meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests'>";
    $("head").prepend(meta);
}
