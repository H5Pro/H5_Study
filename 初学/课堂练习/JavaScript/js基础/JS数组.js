/**
 * Created by fjl on 17/3/30.
 */

//使用Array构造函数
var arr = new Array();
arr[arr.length] = 1;
arr[arr.length] = 2;
arr[arr.length] = 3;
arr[arr.length] = 4;
arr[arr.length] = 5;
console.log("arr:"+"[" + arr + "]"+"\n");

//指定数组长度
var arr1 = new Array(8);
arr1[0] = 'a';
arr1[1] = 'b';
arr1[2] = 'c';
arr1[3] = 'd';
arr1[4] = 'e';
arr1[arr1.length] = 'f';
console.log("arr1:"+"[" + arr1 + "]"+"\n");

//创建有初始值的数组
var arr2 = new Array(1,2,3,5,7);
console.log("arr2:"+"[" + arr2 + "]"+"\n");

//使用[]创建空数组
var  arr3 = [];
console.log("arr3:"+"[" + arr3 + "]" +"\n");

//使用[]创建二维数组
var arr4=[[1,2,3],[4,5,6]];
console.log("arr4:"+"[" + arr4 + "]");
console.log("arr4[1][2]:"+"[" + arr4[1][2] + "]"+"\n");

//创建字符串索引数组
var arr5 = [];
arr5['河北'] = ['石家庄','秦皇岛','廊坊'];
arr5['河南'] = ['郑州','开封','洛阳'];
arr5['辽宁'] = ['沈阳','大连','锦州'];
console.log("arr5:"+"[" + arr5 + "]");
console.log("arr5['河南'][1]:"+"[" + arr5['河南'][1] + "]" +"\n");

//遍历数组方法一
console.log('遍历数组方法一：');
for(var i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log('\n');


//遍历数组方法二
console.log('遍历数组方法二：');
for(var index in  arr){
    console.log(arr[index]);
}
console.log('\n');

