import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {MenuItem} from './menu-item';
@Component({
  selector: 'app-lee-tab-menu',
  templateUrl: './lee-tab-menu.component.html',
  styleUrls: ['./lee-tab-menu.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LeeTabMenuComponent),
      multi: true
    }
  ]
})
export class LeeTabMenuComponent implements OnInit, ControlValueAccessor {
  _value: MenuItem;
  @Input ()
  set value (v: MenuItem) {
    if (this._value !== v) {
      this._value = v;
      this.onChangeCallback(v);
      this.onChange.emit(v);
    }
  }
  get value () {
    return this._value;
  }
  @Input () items: MenuItem[];
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onOptionClick: EventEmitter<any> = new EventEmitter();
  constructor() { }
  clickItem (item, index) {
    this.value = item;
    this.onOptionClick.emit(item);
  }
  /**********************实现接口ControlValueAccessor**********************/
  writeValue(value: any) {
    this.value = value;
  }
  private onChangeCallback: (_: any) => void = function(){};
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
  }

  ngOnInit() {
  }

}
