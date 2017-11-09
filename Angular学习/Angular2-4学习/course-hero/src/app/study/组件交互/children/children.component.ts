import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  private message = '';
  intervalId = 0;
  seconds = 11;
  constructor() { }
  ngOnInit() {
  }
  clearTimer () {
    clearTimeout(this.intervalId);
  }
  start () {
    this.countDown();
  }
  stop () {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} sencond`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
     this.seconds --;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
