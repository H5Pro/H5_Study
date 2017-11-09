import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAnimateComponent } from './primary-animate.component';

describe('PrimaryAnimateComponent', () => {
  let component: PrimaryAnimateComponent;
  let fixture: ComponentFixture<PrimaryAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
