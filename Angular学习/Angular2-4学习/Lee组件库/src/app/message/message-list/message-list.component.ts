import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../common/components/lee-tab-menu/menu-item';
import { MessageHandled } from '../message-handled';
import {Message} from "../message";
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input () isUnfold = false;
  @Input() messages: MessageHandled[];
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  @Output() onFold: EventEmitter<any> = new EventEmitter();
  isSelectAll = false;
  isBeginEdit = false;
  selectedType: MenuItem;
  messageTypes: MenuItem[] = [
    { label: '应用', value: '1' },
    { label: '通知', value: '2' }
  ];
  // 位于顶部的区块的下标
  topSection = 0;
  get topText () {
    if (this.messages && this.messages.length > this.topSection && this.topSection >= 0) {
      return this.messages[this.topSection].date;
    }
    return '';
  }
  // 位于顶部的区块的文字
  _isNoMore = false;
  @Output() isNoMoreChange: EventEmitter<any> = new  EventEmitter();
  @Output() loadMore: EventEmitter<any> = new EventEmitter();
  @Input()
  set isNoMore (v: boolean) {
    this._isNoMore = v;
    this.isNoMoreChange.emit(v);
  }
  get isNoMore () {
    return this._isNoMore;
  }
  _loading = false;
  @Output() loadingChange: EventEmitter<any> = new EventEmitter();
  @Input()
  set loading (v: boolean) {
    if (this._loading !== v) {
      this._loading = v;
      this.loadingChange.emit(v);
    }
  }
  get loading () {
    return this._loading;
  }
  // 当居于顶部的区块（section）发生改变时触发
  onTop (index) {
    this.topSection = index;
  }
  // 点击加载更多
  clickLoadMore () {
    this.loadMore.emit();
  }
  // 点击折叠按钮
  clickFold () {
    this.onFold.emit();
  }
  // 点击删除按钮
  clickDelete () {
    const newMessages = [];
    for (let i = 0; i < this.messages.length; i++) {
      const obj = this.messages[i];
      const newObj = {
        children: [],
        date: obj.date
      };
      for (let j = 0; j < obj.children.length; j++) {
        const obj1 = obj.children[j];
        if (!obj1.isCheck) {
          newObj.children.push(obj1);
        }
      }
      if (newObj.children.length > 0) {
        newMessages.push(newObj);
      }
    }
    this.messages = newMessages;
  }
  // 切换编辑状态
  toggleEditState (isBeginEdit) {
    this.isBeginEdit = isBeginEdit;
    this.isSelectAll = false;
    for (let i = 0; i < this.messages.length; i++) {
      const obj = this.messages[i];
      for (let j = 0; j < obj.children.length; j++) {
        const obj1 = obj.children[j];
        obj1.isCheck = this.isSelectAll;
      }
    }
  }
  // 选中某个消息
  selectMessage (item, section, cell) {
    if (this.isBeginEdit) {
     this.toggleSimgle(item, section, cell);
    } else {
      this.onSelect.emit(item);
    }
  }
  // 全选切换
  toggleAll () {
    this.isSelectAll = !this.isSelectAll;
    for (let i = 0; i < this.messages.length; i++) {
      const obj = this.messages[i];
      for (let j = 0; j < obj.children.length; j++) {
        const obj1 = obj.children[j];
        obj1.isCheck = this.isSelectAll;
      }
    }
  }
  // 切换单个
  toggleSimgle (item: Message, section: number, cell: number) {
    item.isCheck = !item.isCheck;
    for (let i = 0; i < this.messages.length; i++) {
      const obj = this.messages[i];
      for (let j = 0; j < obj.children.length; j++) {
        const obj1 = obj.children[j];
        if (!obj1.isCheck) {
          this.isSelectAll = false;
          return;
        }
      }
    }
    this.isSelectAll = true;
  }
  ngOnInit() {
    this.selectedType = this.messageTypes[0];
  }
}


