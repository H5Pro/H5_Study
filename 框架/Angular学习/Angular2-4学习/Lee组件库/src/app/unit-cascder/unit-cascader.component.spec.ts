import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitCascaderComponent } from './unit-cascader.component';

describe('UnitCascaderComponent', () => {
  let component: UnitCascaderComponent;
  let fixture: ComponentFixture<UnitCascaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitCascaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitCascaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
