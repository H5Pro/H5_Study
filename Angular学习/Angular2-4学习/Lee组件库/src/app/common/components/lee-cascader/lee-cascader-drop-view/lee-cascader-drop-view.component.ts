import { forwardRef, Component, Output, EventEmitter, Input, OnInit, ElementRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lee-cascader-drop-view',
  templateUrl: './lee-cascader-drop-view.component.html',
  styleUrls: ['./lee-cascader-drop-view.component.scss']
})
export class LeeCascaderDropViewComponent implements OnInit {
  @Input() data: any;
  @Input() cfgs: any;
  @Input() level: any;
  _selects: any;
  @Input()
  set selects (v: any) {
    this._selects = v;
    // 更新选中状态
    this.updateSelected();
  }
  get selects () {
    return this._selects;
  }
  @Input() isFirstLevel: any;
  @Input() isSelectSup: any;
  _isHoverSup: any;
  @Input()
  set isHoverSup (v: any) {
    this._isHoverSup = v;
    if (!v) {
      this.hovered = -1;
    }
  }
  get isHoverSup () {
    return this._isHoverSup;
  }
  curSelect: -1;
  hovered: -1;
  @Output() selectEnd: EventEmitter<any> = new EventEmitter();
  @Output() clickAddNewItem: EventEmitter<any> = new EventEmitter();
  constructor( private $el: ElementRef ) { }
  // 选中结束
  selected (value) {
    value.unshift(this.data[this.cfgs.children][this.curSelect]);
    this.selectEnd.emit(value);
  }
  // 鼠标悬浮
  mouseOver(e, index) {
    // 指定悬浮元素
    this.hovered = index;
    // 找到悬浮目标
    const hoverEl = ((el) => {
      let parent = el;
      while (parent) {
        if (parent.className.indexOf('classify-item') > -1) {
          return parent;
        }
        parent = parent.parentNode;
      }
    })(e.target);
    // 找到悬浮后出现的元素
    const showEl = hoverEl.getElementsByClassName('sub-classify')[0];
    if (showEl) {
      // 找到被定位的元素
      const positionEl = hoverEl.parentNode.parentNode;
      // 获取滚动父元素
      const scollEl = ((el) => {
        let parent = el;
        while (parent && parent instanceof Element) {
          // 获取样式overflow属性
          const overflow = window.getComputedStyle(parent, null)['overflow'];
          if (!this.isChildOf(parent, this.$el.nativeElement)
            && (overflow === 'scroll' || overflow === 'auto')
            || parent === document.body
          ) {
            return parent;
          }
          parent = parent.parentNode;
        }
      })(hoverEl);
      // 悬浮元素的位置
      const hoverRect = hoverEl.getBoundingClientRect();
      // 被定位元素的位置
      const positionRect = positionEl.getBoundingClientRect();
      // 滚动父元素的位置
      const scollRect = scollEl.getBoundingClientRect();
      // 设置showEl的显示状态为'block'
      showEl.style.display = 'block';
      // 计算底部距
      if (scollRect.top + scollEl.clientHeight - hoverRect.top < showEl.clientHeight) {
        showEl.style.bottom = positionRect.bottom - (scollRect.top + scollEl.clientHeight) + 'px';
        showEl.style.top = 'auto';
      } else {
        showEl.style.top = hoverRect.top - positionRect.top - 2 + 'px';
        showEl.style.bottom = 'auto';
      }
    }
  }
  // 点击选项
  clickItem(index) {
    this.curSelect = index;
    const target = this.data[this.cfgs.children][this.curSelect];
    const children = target[this.cfgs.children];
    if (!target[this.cfgs.canAdd] && (!children || children.length === 0)) {
      setTimeout(() => {
        this.selectEnd.emit([this.data[this.cfgs.children][this.curSelect]]);
      }, 50);
    }
  }
  addNewItem(sup) {
    this.clickAddNewItem.emit(sup);
  }
  // 判断下一级是否存在
  judgeNext(item) {
    if (!item) {
      return false;
    }
    if (item[this.cfgs.canAdd]) {
      return true;
    }
    if (item[this.cfgs.children] && item[this.cfgs.children].length > 0) {
      return true;
    }
    return false;
  }
  // 更新选中状态
  updateSelected () {
    if (this.isSelectSup && this.selects && this.selects.length > this.level) {
      this.curSelect = this.selects[this.level];
    }
  }
  ngOnInit() {
    // 确定选中状态
    this.updateSelected();
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
