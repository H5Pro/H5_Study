/**
 * Created by fjl on 17/4/11.
 */


function maopaopaixu(a) {
    for(var i = 0; i<a.length; i++){
        for (var j = 0; j<a.length; j++){
            if (a[j]>a[j+1]){
                /*var temp = a[j];
                a[j]= a[j+1];
                a[j+1] = temp;*/
                swap(a,j,j+1);
            }
        }
    }
    return a;
}

function swap(a,i,j){
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
var a = [1,2,4,3,5,8,3,5];
console.log(maopaopaixu(a));