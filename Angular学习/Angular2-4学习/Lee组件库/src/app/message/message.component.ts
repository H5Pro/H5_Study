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
  selectedMessage: any;
  isUnfold = false;
  handledMessage: MessageHandled[];
  // 折叠
  onFold (messageSidebar) {
    this.isUnfold = false;
    messageSidebar.isUnfold = false;
  }
  // 选中
  onSelect (item, messageSidebar) {
    this.selectedMessage = item;
    this.isUnfold = true;
    messageSidebar.isUnfold = true;
  }
  constructor() { }
  ngOnInit() {
    const messageList = messages.reverse();
    let currentDate: Date = null;
    this.handledMessage = [];
    for (let i = 0; i < messageList.length; i++) {
      const item: Message = messageList[i];
      const date = new Date(item.create_time);
      if (currentDate && date.getFullYear() === currentDate.getFullYear()
        && date.getMonth() === currentDate.getMonth()
        && date.getDate() === currentDate.getDate()) {
        this.handledMessage[this.handledMessage.length - 1].children.push(item);
      } else {
        currentDate = date;
        const classify: MessageHandled = {
          date: date,
          children: [item]
        };
        this.handledMessage.push(classify);
      }
    }
    console.log(this.handledMessage);
  }
}
