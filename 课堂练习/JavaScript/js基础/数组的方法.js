/**
 * Created by fjl on 17/3/30.
 */

var numbers = [5,2,6,3,1,4];
var chars = ['a','b','c','d','e','f'];
var places = ['郑州','洛阳','开封'];

/*
方法一：concat()
连接两个或更多的数组，并返回结果。
*/
var concats = numbers.concat(chars,places);
console.log("(1) concats: "+concats + '\n');

/*
方法二：join()
把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
*/
var joins = numbers.join('+');
console.log("(2) joins: "+joins + '\n');

/*
方法三：reverse()
颠倒数组中元素的顺序。
*/
chars.reverse();
console.log("(3) 颠倒顺序后的chars: "+chars + '\n');

/*
方法四：push()
向数组的末尾添加一个或更多元素，并返回新的长度。
*/
console.log('(4) 数组numbers push前：'+numbers);
numbers.push(7);
console.log('    数组numbers push后：'+numbers +'\n');

/*
方法五：pop()
删除并返回数组的最后一个元素。
*/
var data = numbers.pop();
console.log('(5) 数组numbers pop后：'+numbers);
console.log('    数组numbers 出栈(pop)的数据：'+numbers +'\n');

/*
方法六 unshift()
向数组的开头添加一个或更多元素，并返回新的长度。
*/

chars.unshift('A');
console.log('(6) 数组chars unshift后：'+chars +'\n');

/*
方法七 shift()
删除并返回数组的第一个元素
*/
var char = chars.shift();
console.log('    数组chars shift后：'+chars);
console.log('    数组chars 删除(shift)的数据：'+char +'\n');

/*
方法八 slice()
方法可从已有的数组中返回选定的元素。
*/
/*
参数	    描述

        必需。规定从何处开始选取。
start   如果是负数，那么它规定从数组尾部开始算起的位置。
        也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。

	    可选。规定从何处结束选取。
end     该参数是数组片断结束处的数组下标。如果没有指定该参数，
        那么切分的数组包含从 start 到数组结束的所有元素。
        如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
*/

var slices = numbers.slice(0,4);
console.log('(7) 数组numbers 切分(slice)后：'+slices +'\n');

/*
方法九 sort()
对数组的元素进行排序*/
/*
返回值
对数组的引用。请注意，数组在原数组上进行排序，不生成副本。*/

var sorts = numbers.sort(function (a,b) {
    return b - a;
});
console.log('(9) 数组numbers 降序(sort)后：'+sorts +'\n');

/*
方法十 splice()
删除元素，并向数组添加新元素。*/
/*
参数          	    描述
index	            必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
howmany	            必需。要删除的项目数量。如果设置为 0，则不会删除项目。
item1, ..., itemX	可选。向数组添加的新项目。*/

chars.splice(2,0,'x','y','z');
console.log('(10) 数组chars 部分元素替换(增)(splice)后：'+chars);
chars.splice(2,3);
console.log('    数组chars 部分元素替换(删)(splice)后：'+chars);
chars.splice(0,1,chars[0].toUpperCase());
console.log('    数组chars 部分元素替换(改)(splice)后：'+chars);

/*
方法十一 indexOf()和lastIndexOf()
返回查找项在数组第一次出现的位置，查找方向从前向后
	返回元素最后出现的位置，查找方向从后向前查找*/
var first_index = numbers.indexOf(4);
console.log('(11) 数组numbers第一个4的位置：'+first_index );
var last_index = numbers.indexOf(4);
console.log('     数组numbers最后一个4的位置：'+last_index +'\n');

/*方法十二 forEach()
对数组的每一项运行给定函数，类似于for循环
 forEach方法中的function回调有三个参数：
 第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身
 * */
console.log('(12) forEach()对数组的每一项运行给定函数，类似于for循环');
var forEachs = chars.forEach(function (object, index, arr) { console.log('     ['+index+':'+object+']  ')});
console.log();

/*
方法十三 filter()
对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
 */
var filters = numbers.filter(function (obj, index, arr) {
    return !(obj % 2);
});
console.log('(13) 数组numbers过滤(filter)后得到的数组：'+filters +'\n');

/*
方法十四 map()
对数组中的每一项运行给定函数，返回每次函数运行的结果组成的数组
*/

var maps = numbers.map(function (obj, index, arr) {
    return obj*10;
});
console.log('(14) 数组numbers中的元素映射(map)后得到的数组：'+maps +'\n');

