/**
 * Created by fjl on 2019/2/27
 */

interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
}

interface Student {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom2: Student = {
  id: 89757,
  name: 'Tom',
};

// tom2.id = 9527;
