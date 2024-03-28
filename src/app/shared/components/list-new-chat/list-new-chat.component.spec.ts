/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import ListNewChatComponent from './list-new-chat.component';
 

describe('ListNewChatComponent', () => {
  let component: ListNewChatComponent;
  let fixture: ComponentFixture<ListNewChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
