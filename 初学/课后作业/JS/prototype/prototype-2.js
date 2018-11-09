/**
 * Created by fjl on 17/6/9.
 */
function Person(){};
Person.prototype.name = 'fjl';
Person.prototype.age = '23';
Person.prototype.say = function(){
    console.log('我是'+this.name+',今年'+this.age+'岁');
};

var p1 = new Person();
var p2 = new Person();
p1.say();
p2.say();
console.log(p1.say == p2.say);