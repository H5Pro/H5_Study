import { Component, forwardRef, ElementRef, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lee-cascader',
  templateUrl: './lee-cascader.component.html',
  styleUrls: ['./lee-cascader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LeeCascaderComponent),
      multi: true
    }
  ]
})
export class LeeCascaderComponent implements OnInit, ControlValueAccessor {
  _value: any;
  @Input()
  set value (v: any){
    this._value = v;
    this.onChangeCallback(v);
    if (this.cfgs.isLastValue) {
      if (this.data) {
        this._values = this.getPropertyFullValuesInTree([this.data], this.cfgs.value, v);
      } else {
        this._values = [];
      }
    } else {
      this._values = v;
    }
    // 初始化选中下标集合
    this.setSelectsFromValues(this._values);
  }
  get value () {
    return this._value;
  }
  // size: large,small,normal,mini
  @Input() size = 'normal';  // 可选字段，有默认值
  // 下拉出现的所有数据
  _data: any;
  @Input()
  set data (v: any) {
    this._data = v;
    if (this.cfgs.isLastValue) {
      this.values = this.getPropertyFullValuesInTree([v], this.cfgs.value, this.value);
    }
  }
  get data () {
    return this._data;
  }
  // 配置参数 (可以配置title,value,detail所对应的属性)
  @Input() configs: any;
  @Output() selectEnd: EventEmitter<any> = new EventEmitter();
  @Output() clickAddNewItem: EventEmitter<any> = new EventEmitter();
  @Output() dropChanged: EventEmitter<any> = new EventEmitter();
  // 默认配置
  cfgs = {
    // 显示内容的字段名称
    label: 'leeLabel',
    // 选中后值的字段名称
    value: 'leeValue',
    // 显示详细内容的字段名称
    detail: 'leeDetail',
    // 取下一级列表的字段名称
    children: 'leeChildren',
    // 某一级选项列表能否新增的字段名称
    canAdd: 'leeCanAdd',
    // input内选项之间的分隔符
    seperate: '/',
    // 只显示最后一级
    onlyLast: false,
    // 只取最后一级的值
    isLastValue: false,
    // 一级下拉框的最大高度
    firstMaxHeight: 0,
    // 一级以外下拉框的最大高度
    otherMaxHeight: 0,
    // 一级下拉框的宽度
    firstWidth: 0,
    // 一级以外的下拉框的宽度
    otherWidth: 0
  };
  // 级联选择，选中后的值的集合
  _values = [];
  set values (v: any) {
    this._values = v;
    if (v) {
      this._value = v[v.length - 1];
      this.onChangeCallback(this._value);
    }
    // 初始化选中下标集合
    this.setSelectsFromValues(this.values);
  }
  get values () {
    return this._values;
  }
  // 级联选择， 选中后的下标的集合
  selects = [];
  isDrop = false;
  sizeSets = {
    large: {
      height: 40,
      fontSize: 16
    },
    normal: {
      height: 30,
      fontSize: 14
    },
    small: {
      height: 26,
      fontSize: 12
    },
    mini: {
      height: 22,
      fontSize: 12
    }
  };
  constructor(private $el: ElementRef) { }
  writeValue(value: any) {
    if (value !== this.value) {
      this.value = value;
    }
  }
  private onChangeCallback: (_: any) => void = function(){};
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
  }
  inputValue() {
    // 多级选择的文字数组
    const labels = [];
    let data = this.data.children;
    // 获取文字数组
    if (this.selects) {
      for (let i = 0; i < this.selects.length; i++) {
        const index = this.selects[i];
        labels.push(data[index][this.cfgs.label]);
        if (data[index]) {
          data = data[index][this.cfgs.children];
        }
      }
    }
    let inputStr;
    if (this.cfgs.onlyLast) { // 只显示最后一级文字
      if (labels) {
        inputStr = labels[labels.length - 1];
      }
    } else {
      // 显示全部文
      inputStr = labels.join(this.cfgs.seperate) ;
    }
    return inputStr || '';
  }

  // 下拉选项完成
  selected (objs) {
    const values = objs.map((obj) => {
      return obj[this.cfgs.value];
    });
    this.values = values;
    this.isDrop = false;
    this.selectEnd.emit(objs);
  }
  // 点击新增新条目
  addNewItem(sup) {
    this.clickAddNewItem.emit({sup, title: '新增' + sup[this.cfgs.label]});
    this.isDrop = false;
  }
  // 根据点击事件，展开\闭合下拉选项
  changeDrop(e) {
    if (e) {
      e.target.blur();
    }
    this.isDrop = !this.isDrop;
    this.dropChanged.emit(this.isDrop);
  }
  // 根据级联选择器传入的值得集合，来确定下标的集合
  setSelectsFromValues(values) {
    const arr = [];
    let data = this.data[this.cfgs.children];
    if (values && data) {
      for (let i = 0; i < values.length; i++) {
        let index = -1;
        for (let j = 0; j < data.length; j++) {
          if (data[j][this.cfgs.value] === values[i]) {
            index = j;
            break;
          }
        }
        if (index >= 0) {
          arr.push(index);
          data = data[index][this.cfgs.children];
        } else {
          break;
        }
      }
    }
    this.selects = arr;
  }
  ngOnInit() {
    // 参数配置放在最前面
    if (this.configs) {
      this.cfgs.value = this.configs.value || this.cfgs.value;
      this.cfgs.label = this.configs.label || this.cfgs.label;
      this.cfgs.detail = this.configs.detail || this.cfgs.detail;
      this.cfgs.children = this.configs.children || this.cfgs.children;
      this.cfgs.canAdd = this.configs.canAdd || this.cfgs.canAdd;
      this.cfgs.seperate = this.configs.seperate || this.cfgs.seperate;
      this.cfgs.onlyLast = this.configs.onlyLast || this.cfgs.onlyLast;
      this.cfgs.isLastValue = this.configs.isLastValue || this.cfgs.isLastValue;
      this.cfgs.firstMaxHeight = this.configs.firstMaxHeight || this.cfgs.firstMaxHeight;
      this.cfgs.otherMaxHeight = this.configs.otherMaxHeight || this.cfgs.otherMaxHeight;
      this.cfgs.firstWidth = this.configs.firstWidth || this.cfgs.firstWidth;
      this.cfgs.otherWidth = this.configs.otherWidth || this.cfgs.otherWidth;
    }
    // 获取值得操作
    this.values = this.value;
    const thisEl = this.$el.nativeElement;
    // 监听窗口点击事件
    window.addEventListener('click', (e) => {
      if (!this.isChildOf(e.target, thisEl) && e.target !== thisEl) {
        this.isDrop = false;
      }
    }, true);
  }

  /**
   * 获取叶子节点目标在树中的链表所对应的属性集合
   * @param tree 树
   * @param key 目标的键值
   * @param value 目标键值所对应的值
   * @returns {Array} 属性值链表
   */
  getPropertyFullValuesInTree (tree, key, value) {
    const targets = this.findFullListInTree(tree, key, value);
    const values = [];
    for (let i = 0; i < targets.length; i++) {
      const obj = targets[i];
      if (obj[key]) {
        values.push(obj[key]);
      }
    }
    return values;
  }
  /**
   * 获取叶子节点目标在树中的链表
   * @param tree 树
   * @param key 目标的键值
   * @param value 目标键值所对应的值
   * @returns {Array} 链表
   */
  findFullListInTree (tree, key, value) {
    let target = null;
    this.forEachTree(tree, (item) => {
      if ((!item.children || item.children.length === 0) && item[key] === value) {
        target = item;
        return;
      }
    }, null);
    const arr = [];
    while (target) {
      arr.unshift(target);
      target = target.parent;
    }
    return arr;
  }
  /**
   * 遍历整棵树
   * @param tree 被遍历的树
   * @param callBack 遍历到节点的回调函数（参数为遍历到的节点）
   */
  forEachTree (tree, callBack, sup) {
    if (tree) {
      for (let i = 0; i < tree.length; i++) {
        const obj = tree[i];
        obj.parent = sup;
        callBack(obj);
        this.forEachTree(obj.children, callBack, obj);
      }
    }
  }

  // 判断在dom树中，前者是否是后者的子元素
  isChildOf = function (child, parent) {
    let parentNode: any = null;
    if (parent) {
      parentNode = child.parentNode;
      while (parentNode) {
        if (parent === parentNode) {
          return true;
        }
        parentNode = parentNode.parentNode;
      }
    }
    return false;
  };
}
