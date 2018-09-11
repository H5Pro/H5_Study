/**
 * Created by fjl on 2018/9/11
 */
/**
 * @description 最简单数组去重法
 * @param arr
 * @returns {Array}
 */
const uniq1 = (arr) => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (temp.indexOf(item) === -1) {
            temp.push(item)
        }
    }
    return temp
}

/**
 * @description map方法，空间换时间
 * @param arr
 * @returns {Array}
 */
const uniq2 = (arr) => {
    let map = {}, temp = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const type = typeof item
        if (!map[item]) {
            map[item] = [type]
            temp.push(item)
        } else if (map[item].indexOf(type) === -1) {
            map[item].push(type)
            temp.push(item)
        }
    }
    return temp
}

/**
 * @description 排序后，相邻值相同去除
 * @param arr
 * @returns {Array}
 */
const uniq3 = (arr) => {
    const array = JSON.parse(JSON.stringify(arr))
    array.sort()
    let temp = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]
        if (item !== temp[temp.length - 1]) {
            temp.push(item)
        }
    }
    return temp
}
/**
 * @description 是否首次出现
 * @param arr
 * @returns {Array}
 */
const uniq4 = (arr) => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (arr.indexOf(item) === i) {
            temp.push(item)
        }
    }
    return temp
}

/**
 * @description 右边没有相同值放入数组
 * @param arr
 * @returns {Array}
 */
const uniq5 = (arr) => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        let hasSameValue = false
        for (let j = i + 1; j < arr.length; j++) {
            const item1 = arr[j]
            if (item === item1) {
                hasSameValue = true
                break
            }
        }
        if (!hasSameValue) {
            temp.push(item)
        }
    }
    return temp
}
/**
 * @description 右边没有相同值放入数组(看不懂)
 * @param arr
 * @returns {Array}
 */
function uniq6(array){
    var temp = []
    var l = array.length
    for(var i = 0; i < l; i++) {
        for(var j = i + 1; j < l; j++){
            if (array[i] === array[j]){
                i++
                j = i
            }
        }
        temp.push(array[i])
    }
    return temp
}

const aa = [1,2,"2",4,9,"a","a",2,3,5,6,5]
console.log(uniq1(aa))
console.log(uniq2(aa))
console.log(uniq3(aa))
console.log(uniq4(aa))
console.log(uniq5(aa))
console.log(uniq6(aa))
