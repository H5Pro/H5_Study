/**
 * Created by fjl on 17/3/30.
 */
var b={
    name:"fjl",
    'age':23,
    run: function () {
        return 'hello world';
    }
}

console.log(b["name"]);
console.log(b.age)
delete b.name;
console.log(b.name);
console.log(b.run());


var list = [1,2,3];
console.log(list instanceof Array);

var a = new Object();
console.log(a.constructor);
console.log(a.toString());
console.log(a.valueOf()=== a);