/**
 * Created by fjl on 17/4/12.
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



Date.prototype.monthDays = function (years,month) {
    if(typeof month !== 'number' || typeof years !== 'number')
        return -1;
    var date = new Date(years + '/' + (month +1) +'/1'); //js月份是0-11，加1之后，回复到1-12
    date.setMonth(date.getMonth()+1);
    date.setDate(date.getDate()-1);

    var days = date.getDate();
    console.log(month);

    console.log(days);
    return days;
}


Date.prototype.monthFirstWeek = function (years,month) {
    if(typeof month !== 'number' || typeof years !== 'number')
        return -1;
    var date = new Date(years + '/' + (month+1)  +'/1');//js月份是0-11，加1之后，回复到1-12
    var week = date.getDay();
    return week;
}


//创建一个内部的作用全局域
!function(){

    //全局的时间
    var date = new Date();

    function showTime() {
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();

        var week = Date.prototype.monthFirstWeek(year,month);
        var days = Date.prototype.monthDays(year,month);
        var time  =  document.getElementById('time');
        var riqi =  document.getElementById('riqi');

        time.innerHTML = year + "年" + (month+1) + "月" + day+ "日";
        riqi.innerHTML = '';
        for (var i=0;i<week;i++){
            var li = document.createElement('li');
            riqi.appendChild(li);
        }
        for (var i=1;i<=days;i++){

            var li = document.createElement('li');
            var href_a = document.createElement('a');
            href_a.innerHTML = (i<10?'&nbsp;':'') + i;
            href_a.href = "";
            if(i === day)
                href_a.style.backgroundColor = '#f9ecd6';
            href_a.onclick = function() {
                var inner = this.innerHTML;

               var dayStr = inner.replace('&nbsp;','');
                date.setDate(dayStr);
                showTime();
                return false;
            }
            li.appendChild(href_a);
            riqi.appendChild(li);
        }


    }


    addLoadEvent(preRili());


//弹出新窗口
    function preRili() {

        showTime();

        if (!document.getElementsByClassName||!document.getElementById) //对象检测
            return false;
        var lastMonth = document.getElementById('lastMonth');
        var nextMonth  = document.getElementById('nextMonth');
        var lastYear  = document.getElementById('lastYear');
        var nextYear  = document.getElementById('nextYear');

        //上个月
        lastMonth.onclick = function () {

            //设置新的日期
            safeDate(0,-1);
            //显示新的日期
            showTime();
            return false;
        }


        //下个月
        nextMonth.onclick = function () {
            //设置新的日期
            safeDate(0,1);
            //显示新的日期
            showTime();
            return false;
        }

        //上一年
        lastYear.onclick = function () {
            //设置新的日期
            safeDate(-1,0);
            //显示新的日期
            showTime();
            return false;
        }

        //下一年
        nextYear.onclick = function () {
            //设置新的日期
            safeDate(1,0);
            //显示新的日期
            showTime();
            return false;
        }


    }
    /*更改当前日期（安全格式化）
    *@nextYears：增加的年数(以全局date为基准，可正可负)
    *@nextMonths：增加的月数(同上)
     */
    function safeDate(nextYears,nextMonths) {
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var newDays = Date.prototype.monthDays(year+nextYears,month+nextMonths);
        date.setFullYear(year+nextYears);
        date.setMonth(month+nextMonths);
        if (day>newDays)
          date.setDate(newDays);


    }


}();

















