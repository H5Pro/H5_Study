import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeCascaderDropViewComponent } from './lee-cascader-drop-view.component';

describe('LeeCascaderDropViewComponent', () => {
  let component: LeeCascaderDropViewComponent;
  let fixture: ComponentFixture<LeeCascaderDropViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeCascaderDropViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeCascaderDropViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
