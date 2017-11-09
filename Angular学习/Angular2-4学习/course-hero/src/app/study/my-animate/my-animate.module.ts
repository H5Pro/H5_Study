import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryAnimateComponent } from './primary-animate/primary-animate.component';
import { Course1Component } from './animate/course1/course1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrimaryAnimateComponent, Course1Component]
})
export class MyAnimateModule { }
