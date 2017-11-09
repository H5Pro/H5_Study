import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../common/components/lee-tab-menu/menu-item';
import { MessageHandled } from '../message-handled';
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
     item.isCheck = !item.isCheck;
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
  toggleSimgle (section: number, cell: number) {
    this.messages[section].children[cell].isCheck = !this.messages[section].children[cell].isCheck;
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


