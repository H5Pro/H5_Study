/**
 * Created by fjl on 2017/6/13.
 */

var ul = document.getElementById('news_list');
var newsData = [];

(function(){
    var params = {
        page:1,
        rows:10,
        type:3
    };
    UrlReq.POST_O('newsList.do',params,function(obj){
         newsData = obj.rows;
        refreshNewsList(newsData);

    });
})();



//刷新新闻列表
function refreshNewsList(newsData){

    var showData =  {list:newsData};
    var tpl = document.getElementById('news_items').innerHTML;
    var html = juicer(tpl, showData);
    var ul = document.getElementById('news_list');
    ul.innerHTML = html;
}



ul.onclick = function(e){
    var index = jTools.Element.indexParentAndChild(e.target,'li',this);
    if(index>=0){
        var newsId = newsData[index].newsId;
        var params = {
            newsId:newsId
        };
        location.href = 'newsInfo.html?'+jTools.StrTools.appendUrl(params);
    }

};

