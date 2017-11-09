import { Component, Input, OnInit } from '@angular/core';
import { LeeNotifyMessage } from './lee-notify-message';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-lee-notify',
  templateUrl: './lee-notify.component.html',
  styleUrls: ['./lee-notify.component.scss'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green'
      }))
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
