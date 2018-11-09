/**
 * Created by fjl on 17/6/9.
 */

function Point(x,y){
    this.x = x;
    this.y = y;
};

var p1 = new Point(1,2);
var p2 = new Point(3,4);
Point.prototype.z = 5;

console.log(p1.z);
console.log(p2.z);