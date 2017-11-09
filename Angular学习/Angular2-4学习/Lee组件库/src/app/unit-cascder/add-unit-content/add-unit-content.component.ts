import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-unit-content',
  templateUrl: './add-unit-content.component.html',
  styleUrls: ['./add-unit-content.component.scss']
})
export class AddUnitContentComponent implements OnInit {
  @Input() supData: any;
  _unitTypeId: any;
  @Input()
  set unitTypeId (v: any){
    this._unitTypeId = v;
    this.params.categoryId = v;
  }
  get unitTypeId () {
    return this._unitTypeId;
  }
  @Output() AddSucess: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  params = {
    categoryId: '',
    baseUnit: false,
    eqAmountOfBaseUnit: 1,
    name: '',
    remark: ''
  };
  loading = false;
  clickCancel () {
    this.cancel.emit();
  }
  clickSave () {
    this.loading = true;
    this.AddSucess.emit('yizhi');
    // this.$http.postUnits(this.params).then(({data}) => {
    //   this.loading = false;
    //   if (data.data) {
    //     if (!this.supData.children) {
    //       this.supData.children = [];
    //     }
    //     this.supData.children.push(data.data);
    //     this.AddSucess.emit(data.data.id);
    //   }
    // }).catch((err) => {
    //   this.loading = false;
    //   console.log(err);
    // });
  }
  constructor() { }
  ngOnInit() {
  }

}
