/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeeRefreshListSectionFooterComponent } from './lee-refresh-list-section-footer.component';

describe('LeeRefreshListSectionFooterComponent', () => {
  let component: LeeRefreshListSectionFooterComponent;
  let fixture: ComponentFixture<LeeRefreshListSectionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeRefreshListSectionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeRefreshListSectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
