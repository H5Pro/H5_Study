import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'add-unit-type-content',
  templateUrl: './add-unit-type-content.component.html',
  styleUrls: ['./add-unit-type-content.component.scss']
})
export class AddUnitTypeContentComponent implements OnInit {
  @Input() supData: any;
  @Input() cfgs: any;
  @Output() AddSucess: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  params = {
    name: '',
    remark: ''
  };
  loading = false;
  clickCancel () {
    this.cancel.emit();
  }
  clickSave () {
    this.loading = true;
    // this.$http.postUnitCategories(this.params).then(({data}) => {
      this.loading = false;
      // if (data.data) {
        const unitType = {id: '', name: '我的', remark: '单位'}; // data.data;
        unitType[this.cfgs.canAdd] = true;
        this.supData.children.push(unitType);
        this.AddSucess.emit(unitType.id);
     // }
      // }).catch((err)=> {
   //   this.loading = false
   //
   // })
  }
  constructor() { }
  ngOnInit() {
  }

}
