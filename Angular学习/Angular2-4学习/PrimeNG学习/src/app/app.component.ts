import { Component } from '@angular/core';
import {ConfirmationService} from 'primeng/primeng';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService]
})
export class AppComponent {
  constructor (private confirmationService: ConfirmationService) {
  }
  items = [
    {label: 'Stats', icon: 'fa-bar-chart'},
    {label: 'Calendar', icon: 'fa-calendar'},
    {label: 'Documentation', icon: 'fa-book'},
    {label: 'Support', icon: 'fa-support'},
    {label: 'Social', icon: 'fa-twitter'}
  ];
  activeItem = this.items[2];
  confirm () {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept () {
        alert('OK');
      }
    });
  }
}
