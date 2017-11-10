import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { MessageHandled } from './message-handled';
import {messages} from './messages';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  _isShow = false;
  set isShow (v: boolean) {
    if (this._isShow !== v) {
      this._isShow = v;
      if (this._isShow === false) {
        this.isUnfold = false;
      }
    }
  }
  get isShow () {
    return this._isShow;
  }
  _messages: Message[];
  set messages (v: any) {
    this._messages = v;
    this.handledMessage = this.handleMessage(v);
  }
  get messages () {
    return this._messages;
  }
  selectedMessage: any;
  isUnfold = false;
  handledMessage: MessageHandled[];
  isNoMore = false;
  _loading = false;
  set loading (v: boolean) {
    if (this._loading !== v) {
      this._loading = v;
      if (v) {
        this.upRefresh();
      }
    }
  }
  // 点击获取更多按钮
  clickLoadMore () {
    // this.upRefresh();
  }
  get loading () {
    return this._loading;
  }
  // 上拉加载更多数据
  upRefresh () {
    setTimeout(() => {
      this.loading = false;
      // this.isNoMore = true;
       this.messages = this.messages.concat(JSON.parse(JSON.stringify(messages)));
    }, 500);
  }
  // 处理后台接口获取到的消息
  handleMessage (messageList) {
    let currentDate: Date = null;
    const handledMessage: MessageHandled[] = [];
    for (let i = 0; i < messageList.length; i++) {
      const item: Message = messageList[i];
      const date = new Date(item.create_time);
      if (currentDate && date.getFullYear() === currentDate.getFullYear()
        && date.getMonth() === currentDate.getMonth()
        && date.getDate() === currentDate.getDate()) {
        handledMessage[handledMessage.length - 1].children.push(item);
      } else {
        currentDate = date;
        const classify: MessageHandled = {
          date: date,
          children: [item]
        };
        handledMessage.push(classify);
      }
    }
    console.log(handledMessage);
    return handledMessage;
  }
  // 折叠
  onFold (messageSidebar) {
    this.isUnfold = false;
    messageSidebar.isUnfold = false;
  }
  // 选中
  onSelect (item, messageSidebar) {
    this.selectedMessage = item;
    this.isUnfold = true;
    item.readed = true;
    messageSidebar.isUnfold = true;
  }
  constructor() { }
  ngOnInit() {
    this.messages = messages;
    this.isNoMore = false;
  }
}
