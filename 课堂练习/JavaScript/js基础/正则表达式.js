/**
 * Created by fjl on 17/4/3.
 */

//1. 使用构造函数创建正则表达式

var obj = new RegExp('obj');
var obj = new RegExp('Obj','i');
var str = 'This is a Obj!';

//2. 使用字面量创建正则表达式
var reg = /obj/;
var reg = /obj/g;


/*
3. test()
方法在字符串中查找是否存在指定的正则表达式并返回布尔值，
如果存在则返回true，不存在则返回false
*/

console.log(obj.test(str));
console.log(reg.test(str));

/*
4. exec()方法执行成功，则返回包含该查找字符串的相关信息数组。
如果执行失败，则返回null。返回的数组包含index和input属性，
index表示匹配项在字符串中的位置，input表示应用正则表达式的字符串
*/

var matches = obj.exec(str);
console.log(matches);

var matches2=reg.exec(str);
console.log(matches2);



