/**
 * Created by fjl on 17/4/18.
 */

(function() {
    var count = 0;
   var list = document.getElementById('list');
   var btn = document.getElementById('btn-1');
   var input = document.getElementById('input');

   btn.onclick = function (e) {
       var li = document.createElement('li');
       li.innerHTML = count++;
       list.appendChild(li);
       li.scrollIntoView();
   }

   list.onclick = function (e) {
       var target = e.target;



       if (target.parentNode === this){
           var index =-1;
           var lis = this.getElementsByTagName(target.tagName);
           for(o in lis){
               if(lis[o] == target){
                   index = o;
                   break;
               }
           }
           if(index>=0){
               alert(index);
           }


           input.value =  parseInt(target.innerHTML);
       }
   }

})();