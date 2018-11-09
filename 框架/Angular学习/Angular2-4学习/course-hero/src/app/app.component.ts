import { Component, OnInit, ElementRef } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour Heroes';
  current = 2;
  navs = [
    {
      name: '组件交互',
      path: 'parent'
    },
    {
      name: '组件交互2',
      path: 'mission'
    },
    {
      name: '测试',
      path: 'test'
    },
    {
      name: '英雄编辑器',
      path: 'hero'
    },
    {
      name: '基础动画',
      path: 'primary-animate'
    },
    {
      name: 'ng2-动画',
      path: 'ng2-animate'
    },
    {
      name: '动画教程1',
      path: 'course1'
    }
  ];
  constructor (private $activatedRoute: ActivatedRoute,
               private $location: Location, private el: ElementRef) {
  }
  ngOnInit () {
    console.log('this');
    console.log(this.el.nativeElement);
    console.log('$location');
    console.log(this.$location);
    console.log('$activatedRoute');
    console.log(this.$activatedRoute);
  }
}
