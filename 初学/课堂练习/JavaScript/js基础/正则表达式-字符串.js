/**
 * Created by fjl on 17/4/4.
 */


/*
String对象中的正则表达式方法
方  法	        含  义
match(pattern)	返回pattern中的子串或null
replace(pattern, replacement)	用replacement替换pattern
search(pattern)	返回字符串中pattern开始位置
split(pattern)	返回字符串按指定pattern拆分的数组
*/

//1. 使用match方法获取获取匹配数组
var pattern = /obj/ig;
var str = 'This is a Obj!,that is a Obj too';
console.log(str.match(pattern));
console.log(str.match(pattern).length);

//2. 使用search来查找匹配数据
console.log(str.search(pattern)+'  ');

//3. 使用replace替换匹配到的数据
console.log(str.replace(pattern,'Tom'));

//4. 使用split拆分成字符串数组
console.log(str.split(pattern));