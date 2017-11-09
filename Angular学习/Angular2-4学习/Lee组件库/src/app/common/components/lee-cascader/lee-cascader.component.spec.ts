import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeCascaderComponent } from './lee-cascader.component';

describe('LeeCascaderComponent', () => {
  let component: LeeCascaderComponent;
  let fixture: ComponentFixture<LeeCascaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeCascaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeCascaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
