
module.exports = class Person{
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    show () {
        return `我是${this.name},今年${this.age}岁`
    }
}