/**
 * Created by fjl on 2019/1/17
 */
class Node {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    this.next = null
  }
}

class Link {
  // 初始化链表
  constructor () {
    this.head = new Node()
  }
  // 获取链表的长度
  length () {
    var l = 0
    var curNode = this.head
    while (curNode.next) {
      curNode = curNode.next
      l ++
    }
    return l
  }
  // 判断链表是否为空
  isEmpty () {
    return this.head.next === null
  }
  // 插入
  insert (index, item) {
    // 找出插入位置的前一个节点
    var beforeNode = this.head
    var curIndex = 0
    while (beforeNode.next && curIndex < index) {
      curIndex ++
      beforeNode = beforeNode.next
    }
    var afterNode = beforeNode.next
    beforeNode.next = item
    item.next = afterNode
  }
  // 增
  add (item) {
    var curNode = this.head
    while (curNode.next) {
      curNode = curNode.next
    }
    curNode.next = item
  }
  // 删
  delete (index) {
    // 找出删除位置的前一个节点
    var beforeNode = this.head
    var curIndex = 0
    while (beforeNode.next && curIndex < index) {
      curIndex ++
      beforeNode = beforeNode.next
    }
    var curNode = beforeNode.next
    beforeNode.next = curNode.next
    curNode.next = null
  }
  // 改
  modify (index, item) {
    // 找出修改位置的前一个节点
    var beforeNode = this.head
    var curIndex = 0
    while (beforeNode.next && curIndex < index) {
      curIndex ++
      beforeNode = beforeNode.next
    }
    var curNode = beforeNode.next
    beforeNode.next = item
    item.next = curNode.next
    curNode.next = null
  }
  // 查
  find (index) {
    var curNode = this.head.next
    var curIndex = 0
    while (curNode && curIndex < index) {
      curIndex ++
      curNode = curNode.next
    }
    return curNode
  }
}

var aLink = new Link()
aLink.add(new Node('fjl', 24, 'man'))
aLink.add(new Node('fjl1', 24, 'man'))
aLink.add(new Node('fjl2', 24, 'man'))
aLink.add(new Node('fjl3', 24, 'man'))
aLink.insert(4, new Node('fjl4', 24, 'man'))
aLink.modify(3, new Node('fjl5', 24, 'man'))
console.log(aLink.delete(2))
console.log(aLink.find(2))
console.log(aLink.length())
console.log(aLink.isEmpty())

