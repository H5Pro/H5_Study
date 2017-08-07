/**
 * Created by fjl on 2017/6/13.
 */
(function(){
    var login_form = document.getElementById('login_form');
    login_form.onsubmit=function(){

        var paramstr = $('#login_form').serialize();

        UrlReq.POST('userLogin.do',paramstr,function(obj){
            if(obj.code == 1){

              location.href = 'newslist.html';
            }else {
                alert(obj.msg);
            }

        });
        return false;
    };



})();


