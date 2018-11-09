import { Component, OnInit} from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideOutLeft, slideOutUp, slideOutDown, fadeOut } from 'ng-animate';
@Component({
  selector: 'app-primary-animate',
  templateUrl: './primary-animate.component.html',
  styleUrls: ['./primary-animate.component.css'],
  animations: [
    trigger('fadeIn',
      [
        transition('void => *',
          useAnimation(slideInLeft, {
            params: {
              timing: 0.5,
            }
          })),
        transition('* => void',
          useAnimation(fadeOut, {
            params: {
              timing: 0.5,
            }
          })),
      ])
  ],
})
export class PrimaryAnimateComponent implements OnInit {
  fadeIn: any;
  show: boolean;
  change () {
    this.show = !this.show;
  }
  constructor() { }

  ngOnInit() {
  }

}
