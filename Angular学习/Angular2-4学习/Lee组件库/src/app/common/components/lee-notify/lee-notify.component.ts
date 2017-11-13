import { Component, Input, OnInit } from '@angular/core';
import { LeeNotifyMessage } from './lee-notify-message';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'lee-notify',
  templateUrl: './lee-notify.component.html',
  styleUrls: ['./lee-notify.component.scss'],
  animations: [
    trigger('notifyLeaveAnimete', [
      state('void', style({height: 0, opacity: 0})),
      transition('* => void', [animate('250ms')])
    ])
  ]
})
export class LeeNotifyComponent implements OnInit {
  @Input() value: LeeNotifyMessage[];
  @Input() life: string | number;
  constructor() { }
  // 移除生命结束的通知
  deleteItem (index) {
    this.value.splice(index, 1);
  }
  ngOnInit() {
  }

}
