import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { LeeSidebarComponent } from '../common/components/lee-sidebar/lee-sidebar.component';
import { LeeTabMenuModule } from '../common/components/lee-tab-menu/lee-tab-menu.module';
import { CurDatePipe, CurTimePipe, FormatDatePipe } from './datePipe';
const MODULES = [
  LeeTabMenuModule
];
const COMPONENTS = [
  MessageComponent,
  MessageListComponent,
  MessageDetailComponent,
  LeeSidebarComponent,
  CurTimePipe,
  CurDatePipe,
  FormatDatePipe
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
export class MessageModule { }
