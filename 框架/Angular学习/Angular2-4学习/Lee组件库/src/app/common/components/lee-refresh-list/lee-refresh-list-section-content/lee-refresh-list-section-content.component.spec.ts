/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeeRefreshListSectionContentComponent } from './lee-refresh-list-section-content.component';

describe('LeeRefreshListSectionContentComponent', () => {
  let component: LeeRefreshListSectionContentComponent;
  let fixture: ComponentFixture<LeeRefreshListSectionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeRefreshListSectionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeRefreshListSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
