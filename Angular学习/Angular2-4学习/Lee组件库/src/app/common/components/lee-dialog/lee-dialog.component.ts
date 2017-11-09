import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lee-dialog',
  templateUrl: './lee-dialog.component.html',
  styleUrls: ['./lee-dialog.component.scss']
})
export class LeeDialogComponent implements OnInit {
  constructor() { }
  _visible: any = '';
  @Input ()
  set visible (v: any) {
    if (this._visible !== v) {
      this._visible = v;
      this.visibleChange.emit(v);
    }
  }
  get visible () {
    return this._visible;
  }
  _size: any = 'normal';
  @Input()
  set size (v: any) {
    if (v !== this._size) {
      this._size = v;
      const obj = {'lee-dialog': true};
      const size = this.size || 'normal';
      obj['lee-dialog-' + size] = true;
      this.dialogClass = obj;
    }
  }
  get size () {
    return this._size;
  }
  @Input() title: any = '';
  @Output() visibleChange: EventEmitter<any> = new EventEmitter();
  dialogClass: any = {};
  closeDialog () {
    this.visible = false;
  }
  ngOnInit() {
  }

}
