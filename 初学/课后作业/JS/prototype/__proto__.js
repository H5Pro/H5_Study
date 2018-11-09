/**
 * Created by fjl on 17/6/9.
 */
function  Mobile() {
    this.name="手机";
    this.toString=function () {
        console.log(this.name);
    }
}
function Android() {
    this.name="安卓手机";
}
function Samsung(){
    this.name="三星手机";
    this.show=function () {
        console.log('hello samsung');
    }
}
Android.prototype=new Mobile();       //Android 继承Mobile
Samsung.prototype=new Android();      //Samsung 继承Android
Android.prototype.constructor=Android;
Samsung.prototype.constructor=Samsung;
var galaxy=new Samsung();       //手机实例
galaxy.show();                  //实例方法
galaxy.toString();                //原型方法,this 指向当前调用对象

console.log(galaxy instanceof  Samsung);
console.log(galaxy instanceof  Android);
console.log(galaxy instanceof  Mobile);

console.log(Mobile.prototype.isPrototypeOf(galaxy));
console.log(Android.prototype.isPrototypeOf(galaxy));
console.log(Samsung.prototype.isPrototypeOf(galaxy));

var mobile=new Mobile();
mobile.toString();
var android=new Android();
android.toString();
