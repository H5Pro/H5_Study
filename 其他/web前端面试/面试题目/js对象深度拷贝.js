/**
 * Created by fjl on 2019/1/20
 */

const deepCopy = (obj) => {
  if (typeof obj !== 'object') return obj
  let item = {}
  if (obj instanceof Array) item = []
  for (const o in obj) item[o] = deepCopy(obj[o])
  return item
}
let arr = [1, 2, 3];
arr.ff = 11111111
arr.gg = () => {return 1111}
let item = {name: {aa: {bb: 22, cc: arr}}, age: 11}
let newItem = deepCopy(item)
console.log(item.name.aa.cc.gg())
console.log(newItem.name.aa.cc.gg())
