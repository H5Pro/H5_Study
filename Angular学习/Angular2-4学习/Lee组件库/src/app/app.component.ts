import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _loading = false;
  set loading (v: boolean) {
    if (this._loading !== v) {
      this._loading = v;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
  get loading () {
    return this._loading;
  }
  unit = 'yizhi';
  name = 'hello';
  isShow = false;

  color = 'blue';
  color1 = 'yellow';
  cities1 = [
    {label: '应用', value: 1},
    {label: '通知', value: 2}
  ];
  selectedCity1 = 1;
  onChange () {
    alert(1);
  }
}
