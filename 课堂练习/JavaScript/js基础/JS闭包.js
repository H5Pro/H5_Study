/**
 * Created by fjl on 17/3/30.
 */
function obj() {
    var age = 100;
    return function() {
        return ++age;
    }
}
var b = obj();
console.log(b());
console.log(b());