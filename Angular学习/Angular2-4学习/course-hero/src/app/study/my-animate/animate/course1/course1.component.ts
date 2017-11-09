import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css'],
  animations: [
  trigger('heroState', [
    state('inactive', style({
      backgroundColor: '#666',
      opacity: '1'
    })),
    state('active',   style({
      backgroundColor: '#666',
      opacity: '0.6'
    })),
    transition('inactive => active', animate('1000ms ease-in')),
    transition('active => inactive', animate('1000ms ease-out'))
  ])
]
})
export class Course1Component implements OnInit {
  constructor() { }
  heroes = [
    { name: '123', state: 'inactive' },
    { name: '234', state: 'inactive' },
    { name: '345', state: 'inactive' },
    { name: '456', state: 'inactive' }
  ];
  ngOnInit() {
  }

}
