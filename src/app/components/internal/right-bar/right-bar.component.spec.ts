/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightBarComponent } from './right-bar.component';

describe('RightBarComponent', () => {
  let component: RightBarComponent;
  let fixture: ComponentFixture<RightBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
