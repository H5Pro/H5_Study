import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ConfirmDialogModule, TabMenuModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TabMenuModule,
    BrowserModule,
    ConfirmDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
