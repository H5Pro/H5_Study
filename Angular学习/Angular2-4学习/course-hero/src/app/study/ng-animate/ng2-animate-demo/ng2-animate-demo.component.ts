import { Component, OnInit } from '@angular/core';
import { animateFactory } from 'ng2-animate';
@Component({
  selector: 'app-ng2-animate-demo',
  templateUrl: './ng2-animate-demo.component.html',
  styleUrls: ['./ng2-animate-demo.component.css'],
  animations: [animateFactory(1000, 200, 'ease-in')]
})
export class Ng2AnimateDemoComponent implements OnInit {
  show: boolean;
  list: string[] = ['xxx', 'yyy'];
  constructor() { }

  onAdd () {
    this.list.push('zzz');
  }
  onRemove (i) {
    this.list.splice(i, 1);
  }
  ngOnInit() {
    this.show = true;
  }

}
