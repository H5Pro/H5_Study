/**
 * Created by fjl on 17/4/6.
 */

function factor(n) {


    if (!(typeof n == 'number')){
        return'\"'+ typeof n +'\"' +" type can`t be calculate!";
    }

    if(n>1){
        return n*factor(n-1);
    }
    return 1;
}

console.log(factor(6));

