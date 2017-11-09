import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeNotifyComponent } from './lee-notify.component';

describe('LeeNotifyComponent', () => {
  let component: LeeNotifyComponent;
  let fixture: ComponentFixture<LeeNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
