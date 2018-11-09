/**
 * Created by fjl on 17/4/11.
 */

function quchong(a) {

    for(var i = 0; i<a.length;i++) {
        if (a.lastIndexOf(a[i]) !== i) {
        a.splice(i, 1);
            i--;
    }
}
}

var a = [1,2,3,4,5,6,7,1,3,4,6,7,8,2,2,4,6,7,7,1,2,4,6,8];
quchong(a);
console.log(a);