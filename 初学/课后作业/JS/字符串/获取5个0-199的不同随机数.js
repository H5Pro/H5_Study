/**
 * Created by fjl on 17/4/14.
 */



function randoms(m,n,num) {
    var arr =[];
    for(var i=0;i<num;i++){
        var random =Math.floor((n-m-i+1) *Math.random())+m;

        for (var j=0;j<arr.length;j++){
            if(arr[j]>random)
                break;
            random++;
        }

        arr.push(random);

        arr.sort(function (a,b) {
            return a-b;
        });
    }
    return arr;

}


console.log(randoms(0,100000000,1000000).join('  '));







