/**
 * Created by fjl on 2018/9/15
 */
/**
 * js正则表达式修饰符
 * i: 执行对大小写不敏感的匹配
 * g: 执行全局匹m配（查找所有匹配而非在找到第一个匹配后停止）
 * m: 执行多行匹配
 */

/**
 * js正则表达式模式
 * ^: 一个字符串的开始
 * $: 一个字符串的结束
 * [abc]: 查找方括号之间的任何字符
 * [0-9]: 查找任何从 0 至 9 的数字
 * (x|y): 查找任何以 | 分隔的选项
 * n+	匹配任何包含至少一个 n 的字符串。
 * n*	匹配任何包含零个或多个 n 的字符串。
 * n?	匹配任何包含零个或一个 n 的字符串。
 * n{a, b}  匹配任何包含a-b个 n 的字符串。
 */
// 数字
const reg_exp_digital = /^[0-9]*$/
// 数量
const reg_exp_quantity = /^[0-9]*.?[0-9]*$/
// 手机号/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
const reg_exp_cellphone_global = /^\+(86|1)1[34578][0-9]{9}$/
// 安全密码
const re_exp_strong_password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
// let str = '+8613561895459'\bhi\b
// console.log(str.match(reg_exp_cellphone_global))
// console.log(':3/456=7@A0123s.*78'.match(re_exp_strong_password))
// console.log('12333333.11'.match(reg_exp_quantity))
var patt1 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/
console.log("http://www.runoob.com:80/html/html-tutorial.html".match(patt1))