import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'lee-sidebar',
  templateUrl: './lee-sidebar.component.html',
  styleUrls: ['./lee-sidebar.component.scss'],
  animations: [
    trigger('message',
      [
        state('showHalf', style({
          transform: 'translate(50%, 0)'
        })),
        state('showAll', style({
          transform: 'translate(0, 0)'
        })),
        state('void', style({
          transform: 'translate(100%, 0)'
        })),
        transition('void => showHalf', animate('300ms ease')),
        transition('showHalf => void', animate('300ms ease')),
        transition('showHalf => showAll', animate('300ms ease')),
        transition('showAll => showHalf', animate('300ms ease')),
        transition('void => showAll', animate('300ms ease')),
        transition('showAll => void', animate('300ms ease'))
      ])
  ]
})


export class LeeSidebarComponent implements OnInit {

  constructor() { }
  _isUnfold = false;
  @Input()
  set isUnfold (v: any) {
    this._isUnfold = v;
    this.messageState = v ? 'showAll' : 'showHalf';
  }
  get isUnfold () {
    return this._isUnfold;
  }
  messageState: string;
  // 是否显示消息框
  _visible = false;
  @Input()
  set visible (v: any) {
    if (this._visible !== v) {
      this._visible = v;
      this.messageState = v ? 'showHalf' : 'hidden';
      this.visibleChange.emit(v);
    }
  }
  get visible () {
    return this._visible;
  }
  @Output() visibleChange: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }
}
