import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeeNotifyComponent } from './lee-notify.component';
import { LeeNotifyItemComponent } from './lee-notify-item/lee-notify-item.component';
const MODULES = [
];
const COMPONENTS = [
  LeeNotifyComponent,
  LeeNotifyItemComponent
];
@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class LeeNotifyModule { }
