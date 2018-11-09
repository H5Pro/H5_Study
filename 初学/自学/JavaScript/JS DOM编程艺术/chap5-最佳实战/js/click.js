/**
 * Created by fjl on 17/4/6.
 */

function onclink(url) {
    window.open(url,'popup','width=320,height=480');
}


//分离JavaScript
window.onload = function() {
    if (!document.getElementsByTagName) //对象检测
        return false;
    var links = document.getElementsByTagName('a');
    for (i in links){
        var a_popup = links[i];
        if(a_popup.getAttribute('class') === "popup"){
            a_popup.onclick = function() {
                onclink(this.getAttribute('href'));
                return false;
            }
        }
    }
}