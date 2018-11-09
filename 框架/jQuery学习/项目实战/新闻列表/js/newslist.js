/**
 * Created by fjl on 2017/6/13.
 */

var ul = document.getElementById('news_list');
var newsData = [];
var page = 0;
var oldScrollTop = 0;
var isRequest= false;
var noMoreData = false;

(function(){

    requestNewsList(6,page,20,function(dataArr){
        page++;
        refreshNewsList(1,dataArr);
    });

    var params = {
        key:'fbe171e7ead34fc980dbe3300768896d',
        info:'今天天气怎么样',
        loc:'北京市中关村',
        userid:'123456'
    };
    UrlReq.XHR_CORE(4,'http://www.tuling123.com/openapi/','api',params,function(data){

    });


    UrlReq.XHR_CORE(3,'https://tcc.taobao.com/cc/json/','mobile_tel_segment.htm',{tel:18848962883},function(data){

    });
})();



/*
*
* type:
* */

/**
 * 更新新闻列表
 * @param type :1代表刷新; 2代表尾部添加; 3代表头部添加
 * @param newsData :新闻列表数据
 */
function refreshNewsList(type,newsData){

    var showData =  {list:newsData};
    var tpl = document.getElementById('news_items').innerHTML;
    var html = juicer(tpl, showData);
    var ul = document.getElementById('news_list');
    if(type == 1){
        ul.innerHTML = html;
    }else if(type == 2){
        ul.innerHTML += html;
    }else if(type == 3){
        ul.innerHTML = html + url.innerHTML;
    }


}


//
function requestNewsList(type,page,rows,callBack){

    isRequest = true;
    UrlReq.POST_O('newsList.do',{page:page, rows:rows, type:type},
        function(obj){
            isRequest = false;
            newsData = obj.rows;
            callBack(newsData);
    });
}



//上拉,下拉刷新
$('.pull_refresh').scroll(function(){
      if(!isRequest && $(this).scrollTop()+$(this).height() > this.scrollHeight-5
         && $(this).scrollTop() >= oldScrollTop){
         console.log(2);

          if (!noMoreData){
              if(!isRequest && !noMoreData){
                  $('.foot').addClass('display_block');
                  $('.refresh').text('加载中......');
                  requestNewsList(6,page,5,function(dataArr){
                      page ++;
                      $('.foot').removeClass('display_block');
                      if(dataArr.length > 0){
                          refreshNewsList(2,dataArr);
                      }else {
                          noMoreData = true;
                      }

                  });
              }



          }


     }
    oldScrollTop = $(this).scrollTop();

});

//$('.pull_refresh').mousedown(function(){
//    console.log(1);
//    $('.pull_refresh').mousemove(function(){
//        console.log(123);
//    });
//});
//
//$('.pull_refresh').mouseup(function(){
//    $('.pull_refresh').unbind("mousemove");
//});

$(".pull_refresh").on('mousedown','*',function(){
    console.log('mousedown');
});



$(ul).on('click','>li',function(){
    var index = $('>'+this.tagName,$(this).parent()).index(this);;
    if(index>=0){
        var newsId = newsData[index].newsId;
        var params = {
            newsId:newsId
        };
        location.href = 'newsInfo.html?'+ $.param(params);
    }
});

