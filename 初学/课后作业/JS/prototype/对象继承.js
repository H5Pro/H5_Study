/**
 * Created by fjl on 17/6/9.
 */

//深拷贝函数
Object.prototype.extend=function(p,deep){
    for(var i in p){
        if(deep){
            if(typeof p[i]==='object'){
                this[i]=(p[i].constructor===Array)?[]:{};
                this[i].extend(p[i],deep);
            }else{
                this[i]=p[i];
            }
        }else{
            this[i]=p[i];
        }
    }
};

//对象实例
var mobile={
    type:'iphone',
    colors:['black','gold','white'],
    name:'iphone7',
    callUser:function(user){
        console.log(user);
    }
}
var phone1={};
phone1.extend(mobile,true);   //继承属性
phone1.colors.push('pink');    //更改对象属性

//测试输出
console.log(mobile);
console.log(phone1);

