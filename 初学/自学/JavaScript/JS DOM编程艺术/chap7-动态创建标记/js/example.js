/**
 * Created by fjl on 17/4/6.
 */
/*
 * 添加窗口加载后，执行的事件函数
 * */
function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if(!oldOnLoad){
        window.onload = func;
    }else {
        window .onload =function() {
            oldOnLoad();
            func();
        }
    }
}

addLoadEvent(innerHtml());
//替换innerHTML
function innerHtml(){
    var testDiv = document.getElementById('testdiv');
    testDiv.innerHTML = ' <p>I inserted <em>this</em> content.</p>'
}
