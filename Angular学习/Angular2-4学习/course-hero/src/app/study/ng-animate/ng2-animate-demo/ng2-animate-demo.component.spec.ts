import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2AnimateDemoComponent } from './ng2-animate-demo.component';

describe('Ng2AnimateDemoComponent', () => {
  let component: Ng2AnimateDemoComponent;
  let fixture: ComponentFixture<Ng2AnimateDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2AnimateDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2AnimateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
