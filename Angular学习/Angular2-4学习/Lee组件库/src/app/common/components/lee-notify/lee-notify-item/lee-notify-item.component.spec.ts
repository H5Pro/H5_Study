import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeNotifyItemComponent } from './lee-notify-item.component';

describe('LeeNotifyItemComponent', () => {
  let component: LeeNotifyItemComponent;
  let fixture: ComponentFixture<LeeNotifyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeNotifyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeNotifyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
