import { Component, forwardRef, OnInit, Input } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ConfirmationService } from 'primeng/primeng';
@Component({
  selector: 'unit-cascader',
  templateUrl: './unit-cascader.component.html',
  styleUrls: ['./unit-cascader.component.css'],
  providers: [
    ConfirmationService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UnitCascaderComponent),
      multi: true
    }
  ]
})
export class UnitCascaderComponent implements OnInit, ControlValueAccessor {
  _value: any;
  @Input()
  set value (v: any) {
    this._value = v;
    this.onChangeCallback(v);
  }
  get value () {
    return this._value;
  }
  dialogTitle = '';
  isShow = false;
  isShowType = false;
  configs = {
    // 显示内容
    label: 'name',
    // 取值
    value: 'id',
    // 显示内容的详情
    detail: 'remark',
    // 去下一级列表的关键字
    children: 'children',
    // 多个显示内容拼接到一起的分割符
    seperate: ' - ',
    // 能否增加新条目
    canAdd: 'canAdd',
    // 仅仅显示最后一个选项
    onlyLast: true,
    // 只取最后一级的值
    isLastValue: true,
    otherMaxHeight: 210,
    firstMaxHeight: 210,
    firstWidth: 128,
    otherWidth: 128,
    // 多级之间有相同的value值
    hasSameValue: true
  };
  addedSup: {};
  data: any = {
    first: true,
    name: '单位类型',
    canAdd: true,
    children: [
      {
        id: 'zhinan',
        name: '指南',
        canAdd: true,
        children: [
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
          {
            id: 'shejiyuanze',
            name: '设计原则',
            children: [{
              id: 'yizhi',
              name: '一致'
            },
              {
                id: 'fankui',
                name: '反馈'
              }, {
                id: 'xiaolv',
                name: '效率'
              }, {
                id: 'kekong',
                name: '可控'
              }]
          },
          {
            id: 'daohang',
            name: '导航',
            children: [{
              id: 'cexiangdaohang',
              name: '侧向导航'
            }, {
              id: 'dingbudaohang',
              name: '顶部导航'
            }]
          },
        ]
      },
      {
        id: 'zhinan1',
        name: '指南',
        canAdd: true,
        children: [{
          id: 'shejiyuanze',
          name: '设计原则',
          children: [{
            id: 'yizhi',
            name: '一致'
          }, {
            id: 'fankui',
            name: '反馈'
          }, {
            id: 'xiaolv',
            name: '效率'
          }, {
            id: 'kekong',
            name: '可控'
          }]
        }, {
          id: 'daohang',
          name: '导航',
          children: [{
            id: 'cexiangdaohang',
            name: '侧向导航'
          }, {
            id: 'dingbudaohang',
            name: '顶部导航'
          }]
        }]
      },
      {
        id: 'zhinan2',
        name: '指南',
        canAdd: true,
        children: [{
          id: 'shejiyuanze',
          name: '设计原则',
          children: [{
            id: 'yizhi',
            name: '一致'
          }, {
            id: 'fankui',
            name: '反馈'
          }, {
            id: 'xiaolv',
            name: '效率'
          }, {
            id: 'kekong',
            name: '可控'
          }]
        }, {
          id: 'daohang',
          name: '导航',
          children: [{
            id: 'cexiangdaohang',
            name: '侧向导航'
          }, {
            id: 'dingbudaohang',
            name: '顶部导航'
          }]
        }]
      }
    ]
  };
  private onChangeCallback: (_: any) => void = function(){};
  addNewItem (obj) {
    this.addedSup = obj.sup;
    this.dialogTitle = obj.title;
    if (obj.sup.first) {
      this.isShowType = true;
    } else {
      this.isShow = true;
    }
  }
  // 添加子项成功后ids，自动带入
  fillNewItem (id) {
    // 确定取值
    this.value = id;
  }
  writeValue(value: any) {
    if (value !== this.value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
  }
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

}
