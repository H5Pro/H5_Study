import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildrenComponent)
  private timerComponent: ChildrenComponent;
  constructor() { }

  ngOnInit() {
  }
  stop () {
    this.timerComponent.stop();
  }
  start () {
    this.timerComponent.start();
  }

}
