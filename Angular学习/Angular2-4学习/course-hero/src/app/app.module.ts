import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroMainComponent } from './hero/components/hero-main/hero-main.component';
import { HeroDetailComponent } from './hero/components/hero-detail/hero-detail.component';
// import { LeeNotifyComponent } from './common/components/lee-notify/lee-notify.component';
// import { LeeNotifyItemComponent } from './common/components/lee-notify/lee-notify-item/lee-notify-item.component';
import { PrimaryAnimateComponent } from './study/my-animate/primary-animate/primary-animate.component';
import { Ng2AnimateDemoComponent } from './study/ng-animate/ng2-animate-demo/ng2-animate-demo.component';
// import { LeeConfirmComponent } from './common/components/lee-confirm/lee-confirm.component';
import { TestComponent } from './test/test.component';
import { InputComponent } from './test/input/input.component';
import { ParentComponent } from './study/组件交互/parent/parent.component';
import { ChildrenComponent } from './study/组件交互/children/children.component';
import { MissionControlComponent } from './study/组件交互/mission-control/mission-control.component';
import { AstronautComponent } from './study/组件交互/astronaut/astronaut.component';
import { Course1Component } from './study/my-animate/animate/course1/course1.component';
// import { LeeCascaderComponent } from './common/components/lee-cascader/lee-cascader.component';
// import { LeeCascaderDropViewComponent } from './common/components/lee-cascader/lee-cascader-drop-view/lee-cascader-drop-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroMainComponent,
    HeroDetailComponent,
    // LeeNotifyComponent,
    // LeeNotifyItemComponent,
    PrimaryAnimateComponent,
    Ng2AnimateDemoComponent,
    // LeeConfirmComponent,
    TestComponent,
    InputComponent,
    ParentComponent,
    ChildrenComponent,
    MissionControlComponent,
    AstronautComponent,
    Course1Component,
    // LeeCascaderComponent,
    // LeeCascaderDropViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/hero',
        pathMatch: 'full'
      },
      {
        path: 'hero',
        component: HeroMainComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'parent',
        component: ParentComponent
      },
      {
        path: 'mission',
        component: MissionControlComponent
      },
      {
        path: 'primary-animate',
        component: PrimaryAnimateComponent
      },
      {
        path: 'ng2-animate',
        component: Ng2AnimateDemoComponent
      },
      {
        path: 'course1',
        component: Course1Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
