/**
 * Created by fjl on 17/4/3.
 */


/*
javascript中，每个函数都有call()和apply()两个方法，
这两个方法都是调用当前Function对象，同时改变函数内的this指针引用。
*/



/*-----------------------------------call()和apply()-----------------------------------call*/
var obj = {
    const:10,
    calc:function (a,b,c) {
        console.log(this.const*(a+b+c));
    }
};

var fun = {
    const:100
};

console.log('call()和apply():');
obj.calc.call(fun,1,2,3);
obj.calc.apply(fun,[1,2,3]);
console.log('\n');

/*
 caller
 返回一个对函数的引用，该函数调用了当前函数。
 对于函数来说，caller 属性只有在函数执行时才有定义。
 如果函数是由顶层调用的，那么 caller 包含的就是 null。
 */


/*-----------------------------------caller-----------------------------------call*/
function p() {
    function t() {
        function r() {
            console.log(p.caller);
            console.log(t.caller);
            console.log(r.caller);
        }
        r();
    }
    t();
}

console.log('caller:');
p();
console.log('\n');




/*
 this是函数运行时自动生成的一个内部对象，只能在函数内部使用。
 随着函数的执行环境不同，this的值也会发生变化，但this始终指的是调用函数的那个对象。
 */

/*-----------------------------------this-----------------------------------call*/

//1.方法调用模式

var obj1={
    total:0,
    add:function (a) {
        this.total+=a;  //this指向obj
    }
}

console.log('this-1:');
obj1.add(10);
console.log(obj1.total);



//2.函数调用模式
function  show() {
    console.log(this.toString());
}
console.log('this-2:');
show();



//3. 构造函数调用模式

var Person = function () {
    this.age = 10;
}

var  student = new Person();
console.log('this-3:');
console.log(student.age);


//4. 间接调用
var myObject = {value:100};
var  foo = function () {

    console.log(this.toString());

    if(this.value){
        console.log(this.value);
    }

}
console.log('this-4:');
foo();
foo.call(myObject);
foo.apply(myObject);


console.log('\n');