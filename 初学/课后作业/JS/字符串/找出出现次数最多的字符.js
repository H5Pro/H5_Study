/**
 * Created by fjl on 17/4/14.
 */

function maxCharCount(str) {
   var arr =  str.split('');
   var counts = {};
   arr.forEach(function (item) {
       counts[item]  = counts[item] ?counts[item] + 1 : 1;
   });

   var max = 0 ;
  for (item in counts){
      if(max<counts[item])
          max = counts[item];
  }
   var chars = [];
    for (i in counts){
      if (counts[i] === max)
        chars.push(i);
    }

    return {count:max, charArr:chars};

}

var obj =  maxCharCount('abftertgdhhhgsdgsfdas');
console.log(obj.count);
console.log(obj.charArr);