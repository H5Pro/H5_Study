import { Component } from '@angular/core';
import { LeeNotifyMessage } from './common/components/lee-notify/lee-notify-message';
@Component({
  selector: 'lee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  messages: LeeNotifyMessage[] = [];
  notify () {
    const message: LeeNotifyMessage = {
      type: 'success',
      title: '提示',
      message: '厉害了'
    };
    this.messages.push(message);
  }
}
