import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeeCascaderComponent } from './common/components/lee-cascader/lee-cascader.component';
import { LeeCascaderDropViewComponent } from './common/components/lee-cascader/lee-cascader-drop-view/lee-cascader-drop-view.component';
import { AppComponent } from './app.component';
import { UnitCascaderComponent } from './unit-cascder/unit-cascader.component';
import { ConfirmDialogModule } from 'primeng/primeng';
import { AddUnitContentComponent } from './unit-cascder/add-unit-content/add-unit-content.component';
import { AddUnitTypeContentComponent } from './unit-cascder/add-unit-type-content/add-unit-type-content.component';
import { LeeDialogComponent } from './common/components/lee-dialog/lee-dialog.component';
import { FixedCenterDirective } from './common/directive/fixed-center.directive';
import { DialogModule } from 'primeng/primeng';
import { MessageModule } from './message/message.module';
@NgModule({
  declarations: [
    AppComponent,
    LeeCascaderComponent,
    LeeCascaderDropViewComponent,
    UnitCascaderComponent,
    AddUnitContentComponent,
    AddUnitTypeContentComponent,
    LeeDialogComponent,
    FixedCenterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ConfirmDialogModule,
    DialogModule,
   MessageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
