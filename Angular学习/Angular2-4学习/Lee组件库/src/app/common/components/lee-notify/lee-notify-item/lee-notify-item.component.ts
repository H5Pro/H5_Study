import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LeeNotifyMessage } from '../lee-notify-message';
@Component({
  selector: 'app-lee-notify-item',
  templateUrl: './lee-notify-item.component.html',
  styleUrls: ['./lee-notify-item.component.scss']
})
export class LeeNotifyItemComponent implements OnInit {
  // 通知的配置信息
  @Input () message: LeeNotifyMessage;
  // 通知的生命长度（优先级低于value.life，高于defaultLife）
  @Input () life: string | number;
  @Output () lifeEnd = new EventEmitter();
  // 通知的默认生命长度
  private defaultLife: 3000;
  constructor() { }
  clickClose (): void {
    this.lifeEnd.emit();
  }
  ngOnInit() {
   const timer = setTimeout((): void => {
     this.lifeEnd.emit();
      clearTimeout(timer);
    }, this.message.life || this.life || this.defaultLife);
  }

}
