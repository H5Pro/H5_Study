/**
 * Created by fjl on 17/4/14.
 */

//去除字符串开头和结尾的空格
function trimStr(str) {
    var i,j;
    for (i = 0; i<str.length;i++){

        if(str.charCodeAt(i) != 32)
            break;
    }

    for (j = str.length-1; j>=0;j--){
        if(str.charCodeAt(j) != 32)
            break;

    }
    return str.slice(i,j+1);
}

console.log(trimStr("     abv    ").length);
