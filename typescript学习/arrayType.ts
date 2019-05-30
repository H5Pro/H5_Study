/**
 * Created by fjl on 2019/2/27
 */


//「类型 + 方括号」表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组泛型
let ff: Array<number> = [1, 3, 4, 5, 'e'];

// 应用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let ff2: NumberArray =  [1, 2, 3, '3']

// any 在数组中的应用
let ff3: any[] = ['dsfsa', 24, {aa: '1111'}];

// 类数组(常见的内类数组如： IArguments, NodeList, HTMLCollection)
function sum() {
  let args: number[] = arguments;
}
function sum1() {
  let args: IArguments = arguments;
}


interface A {
  aa?(): string;
  cc(): string;
}

interface B {
  bb(): number;
}
class FF implements A, B{
  bb(): number {
    return 2
  };
  cc():string{
    return '2'
  }
}

