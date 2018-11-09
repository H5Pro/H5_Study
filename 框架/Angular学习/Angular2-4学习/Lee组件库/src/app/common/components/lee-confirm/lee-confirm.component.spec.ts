import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeConfirmComponent } from './lee-confirm.component';

describe('LeeConfirmComponent', () => {
  let component: LeeConfirmComponent;
  let fixture: ComponentFixture<LeeConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
