/**
 * Created by fjl on 2019/1/21
 */
setTimeout(() => {
  console.log(-1)
}, 0)

for (let i = 0; i < 5; i++) {
  (() => {
    console.log(i)
  })()
}

setTimeout(() => {
  console.log(-2)
}, 0)
