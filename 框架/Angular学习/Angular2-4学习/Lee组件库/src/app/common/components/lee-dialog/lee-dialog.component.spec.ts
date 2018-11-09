import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeeDialogComponent } from './lee-dialog.component';

describe('LeeDialogComponent', () => {
  let component: LeeDialogComponent;
  let fixture: ComponentFixture<LeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
