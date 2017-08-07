/**
 * Created by fjl on 17/6/9.
 */
function Person(){
    this.name='公民';
    this.toString=function(){
        return this.name;
    }
}
function Programer(){
    this.name='程序员';
}
function Javascripter(){
    this.name='Javascripter';
}
Programer.prototype=new Person();
Javascripter.prototype=new Programer();
//重置constructor属性
Programer.prototype.constructor=Programer;
Javascripter.prototype.constructor=Javascripter;
var myJavascripter=new Javascripter(5,10);

console.log(myJavascripter.toString());
