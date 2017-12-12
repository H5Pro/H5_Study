/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeeRefreshListSectionHeaderComponent } from './lee-refresh-list-section-header.component';

describe('LeeRefreshListSectionHeaderComponent', () => {
  let component: LeeRefreshListSectionHeaderComponent;
  let fixture: ComponentFixture<LeeRefreshListSectionHeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeeRefreshListSectionHeaderComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeeRefreshListSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
