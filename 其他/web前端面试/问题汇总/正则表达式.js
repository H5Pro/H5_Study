/**
 * Created by fjl on 2018/10/10
 */
var filePath = "/aaa/bbbb/ccc/log.png"
var extendMatch = /(?<=^(\/|\.\/)\w+(\/\w+)*)\.\w+$/
console.log(filePath.match(extendMatch))
