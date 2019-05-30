/**
 * Created by fjl on 2019/2/27
 */
function add(): void {

  // 原始数据类型
  let isDone: boolean = Boolean(1);

  let decliteral: number = 6;
  let hexLiteral: number = 0xf00d;
  let binaryliteral: number = 0b1010;
  let octalLiteral: number = 0x744;
  let notANumber: number = NaN;
  let infinityNumber: number = Infinity;

  let sentence: string = 'hello'

  let unusable: void = undefined;
  let unusable1: void = null;
  let u: undefined = undefined;
  let n: null = null;


  // any: 任意类型
  let myFavoriteNumber: any = 'seven';
  myFavoriteNumber = 7;

  let something;
  something = 'seve';
  something = 7;

  // 类型推论
  let aa = '1111';
  // aa = 2;

  // 联合类型
  let bb: string | number;
  bb = 'seven';
  bb = 7;
}
function sayHello(person: string) {
  return 'Hello, ' + person;
}
let user = 'Tom'
console.log(sayHello(user))
