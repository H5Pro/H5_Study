/**
 * Created by fjl on 17/4/14.
 */

function triangle(n) {
    var str = '';
    for (var i=0;i<n;i++){
        for(var j=0; j<n-i;j++){
         str += ' ';
        }
        for(var j=0; j<2*i+1;j++){
            str +='*';
        }
        str+='\n';
    }
    return str;
}

console.log(triangle(20)) ;