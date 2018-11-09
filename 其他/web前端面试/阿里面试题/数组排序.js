/**
 * Created by fjl on 2018/9/11
 */

/**
 * @description 冒泡排序 （稳定）
 * @param arr
 * @returns {array}
 */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let isOrderly = true // 是否有序
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j] < arr[j-1]) {
                isOrderly = false
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        if (isOrderly) { // 判断数组是否有序
            return arr
        }
    }
    return arr
}


/**
 * @description 选择排序（不稳定, 会改变两个相同元素的位置）
 * @param arr
 * @returns {array}
 */
const selectionSort = (arr) => {
    const l = arr.length
    for (let i = 0; i < l; i++) {
        let mi = i
        for (let j = i+1; j < l; j++) {
            if (arr[j] < arr[mi]) {
                mi = j
            }
        }
        if (mi !== i) {
            let temp = arr[i]
            arr[i] = arr[mi]
            arr[mi] = temp
        }
    }
    return arr
}
/**
 * @description 插入排序（稳定）
 * @param arr
 * @returns {array}
 */
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1
        while (j > 0 && arr[j] < arr[j-1]) {
            const temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
            j --
    }
    }
    return arr
}
/**
 * @description 快速排序（稳定）
 * @param arr
 * @returns {array}
 */
const quickSort = (arr, left, right) => {
    if (left < right) {
        let middle = left
        for (let i = left + 1; i < right; i++) {
            const item = arr[i]
            if (arr[middle] > item) {
                arr.splice(i, 1)
                arr.splice(middle, 0, item)
                middle ++
            }
        }
        quickSort(arr, left, middle - 1)
        quickSort(arr, middle + 1, right)
        return arr
    }
}
const aa = [3,2,1,4,5,6]
console.log(bubbleSort(aa))
console.log(selectionSort(aa))
console.log(insertionSort(aa))
console.log(quickSort(aa, 0, aa.length - 1))
