/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InteranlComponent } from './interanl.component';

describe('InteranlComponent', () => {
  let component: InteranlComponent;
  let fixture: ComponentFixture<InteranlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteranlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteranlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
