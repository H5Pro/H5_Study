import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../message';
@Component({
  selector: 'message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  @Input() message: Message;
  constructor() {
  }

  ngOnInit() {
  }

}
