/**
 * Created by fjl on 17/6/9.
 */
function Person(){}
function Programer(){}
Programer.prototype = new Person();
//重置constructor属性
Programer.prototype.constructor=Programer;


var aPerson = new Person();
var aProgramer = new Programer();

console.log(Person.prototype.isPrototypeOf(aPerson));
console.log(Person.prototype.isPrototypeOf(aProgramer));
