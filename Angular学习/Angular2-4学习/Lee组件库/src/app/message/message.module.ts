import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { LeeSidebarComponent } from './lee-sidebar/lee-sidebar.component';
import { LeeTabMenuModule } from './lee-tab-menu/lee-tab-menu.module';
import { CurDatePipe, CurTimePipe, FormatDatePipe } from './datePipe';
import { WhenScrolledDirective } from './message-directive/when-scrolled.directive';
import { ScrollFixTopDirective } from './message-directive/scroll-fix-top.directive';
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
  FormatDatePipe,
  WhenScrolledDirective,
  ScrollFixTopDirective
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
