/**
 * Created by fjl on 17/4/14.
 */

function yasuo(str) {

    var arr = repeatTimes(str);
    str = '';
    arr.forEach(function (item) {
        str += (item.times>1?item.times:'') + '' + item.chara;
    });
    return str;
}

function repeatTimes(str) {
    var arr = str.split('');
    var begin = 0;
    var chars = [];
    arr.forEach(function (item,index) {
        if(item !== arr[begin]){
            chars.push({times:(index - begin),chara:arr[begin]});
            begin = index;
        }
    });
    chars.push({times:(arr.length - begin),chara:arr[begin]});

    return chars;
}

console.log(yasuo('xxxyyyzaaaa'));