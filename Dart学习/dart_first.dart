// import 'dart:async';
import 'dart:math';

// 入口函数
void main() {
  print('Hello, World!');
  varsDemo();
  controlFlowStatementDemo();
  var result = fibonacci(20);
  print(result);
  arrowFuc();
  useImports();
}
// 1. 变量
void varsDemo() {
  var name = 'Voyager I';
  var year = 1994;
  var antennaDiameter = 3.7;
  var flybyObjecs = ['Jupiter', 'Saturn'];
  var image = {
    'tags': ['saturn'],
    'url': '/path/to/saturn.jpg'
  };
  print(name);
  print(year);
  print(antennaDiameter);
  print(flybyObjecs);
  print(image);
}
// 2. 控制流程语句
controlFlowStatementDemo () {
  var year = 2002;
  if (year >= 2001) {
    print('21st century');
  } else if (year >= 1901) {
    print('20th century');
  }
  const objs = ['Jack', 'Bob', 'King'];
  for (var object in objs) {
    print(object);
  }
  for (int month = 1; month <= 12; month++) {
    print(month);
  }
  while (year < 2016) {
    year += 1;
    print(year);
  }
}
// 3. 函数
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 箭头函数
arrowFuc() => print('箭头函数');

// 异步函数
foo() async => new Future(() => 42); 

// 4. 注释
// 单行注释
/// 文档注释
/// 文档注释
/* 
 * 多行注释
 * 同样支持
 */

// 5. 文件导入 (前几行代码)
useImports () {
  print(pow(2, 10));
  print(Random().nextInt(10));
}

