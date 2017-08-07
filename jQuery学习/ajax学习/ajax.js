/**
 * Created by fjl on 17/4/17.
 */


    $.ajax({

        //url:'http://123.207.174.104:8080/test/register_Repeat?tel=110',
        url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=18848962883',
        //url: 'http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&day=0&city=&dfc=1&charset=utf-8',

        type:'GET',
        dataType:'jsonp',
        beforeSend:function (XMLHttpRequest) {
            console.log('begin');
        },
        success:function(data,textStatus){
            console.log(data);
        },
        complete:function(XMLHttpRequest,textStatus) {
            console.log('coplete');
        },
        error:function() {
            console.log('error');
        }

    });