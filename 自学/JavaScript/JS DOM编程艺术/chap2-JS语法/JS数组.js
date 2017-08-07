/**
 * Created by fjl on 17/3/27.
 */


var beatles = Array(4);
beatles[0] = "john";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";


var names = ["Ringo","John","George","Paul"];

beatles[0] = names;
//关联数组
var lennon =Array();
lennon["name"] = "john";
lennon["year"] = 1940;
lennon["living"] = false;


//创建对象的简单方式

var lennons = {name:"john",year:1994,living:false};


//内建对象
var num = 7.561;
var num =  Math.round();
alert(num);

var current_date = new Date();
var today = current_date.getDay();