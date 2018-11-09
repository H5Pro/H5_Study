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

addLoadEvent(pooup());

//弹出新窗口
function pooup() {
    if (!document.getElementsByTagName) //对象检测
        return false;
    var links = document.getElementsByTagName('a');
    for (i in links){
        var a_popup = links[i];
        if(a_popup.className === 'popup'){
            a_popup.onclick = function() {
                onclink(this.getAttribute('href'));
                return false;
            }

            // a_popup.onkeyprss = a_popup.onclick;

        }
    }
}
//点击链接class为'popup'
function onclink(url) {
    window.open(url,'popup','width=320,height=480');
}



addLoadEvent(preGallery());
//图片浏览
function preGallery() {
    if(!document.getElementById || !document.getElementsByTagName) return false;
    if(!document.getElementById('galleryPics')) return false;
    var target = document.getElementById('galleryPics');
    var a_pics = target.getElementsByTagName('a');
    for(i in a_pics) {
        var a_pic = a_pics[i];
        a_pic.onclick = function () {
           return !showPic(this);
        };

        // a_pic.onkeyprss = a_pic.onclick;
    }
}

//更换图片和文字
function showPic(whichPic) {
    var placeholder;//占位图片
    if (!(placeholder = document.getElementById('placeholder'))) return false;
    var source = whichPic.getAttribute('href');
    placeholder.setAttribute('src', source);
    var description;//图片描述
    if (description = document.getElementById('description')){
        var title = whichPic.getAttribute('title');
        title = title?title:'';
        var firstchild = description.firstChild;
        if(firstchild.nodeType === 3) firstchild.nodeValue = title;
    }

    return true;



}

