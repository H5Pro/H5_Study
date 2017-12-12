import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeeRefreshListComponent } from './lee-refresh-list.component';
import { LeeRefreshListSectionComponent } from './lee-refresh-list-section/lee-refresh-list-section.component';
import { LeeRefreshListCellComponent } from './lee-refresh-list-cell/lee-refresh-list-cell.component';
import { LeeRefreshListHeaderComponent } from './lee-refresh-list-header/lee-refresh-list-header.component';
import { LeeRefreshListFooterComponent } from './lee-refresh-list-footer/lee-refresh-list-footer.component';
import { LeeRefreshListSectionHeaderComponent } from './lee-refresh-list-section-header/lee-refresh-list-section-header.component';
import { LeeRefreshListSectionFooterComponent } from './lee-refresh-list-section-footer/lee-refresh-list-section-footer.component';
import { LeeRefreshListContentComponent } from './lee-refresh-list-content/lee-refresh-list-content.component';
import { LeeRefreshListSectionContentComponent } from './lee-refresh-list-section-content/lee-refresh-list-section-content.component';
const COPMONNETS = [
  LeeRefreshListComponent,
  LeeRefreshListHeaderComponent,
  LeeRefreshListFooterComponent,
  LeeRefreshListContentComponent,
  LeeRefreshListSectionComponent,
  LeeRefreshListSectionHeaderComponent,
  LeeRefreshListSectionFooterComponent,
  LeeRefreshListSectionContentComponent,
  LeeRefreshListCellComponent,
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COPMONNETS
  ],
  exports: [
    ...COPMONNETS
  ]
})
export class LeeRefreshListModule { }
