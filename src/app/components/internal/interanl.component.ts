import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router'; 
import { LeftBarComponent } from './left-bar/left-bar.component';
import { RightBarComponent } from './right-bar/right-bar.component';

@Component({
  selector: 'app-interanl',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LeftBarComponent, RightBarComponent],
  templateUrl: './interanl.component.html',
  styleUrls: ['./interanl.component.css']
})
export default class InteranlComponent {

  enabledListChat = false;

  listChat(open: any){
    this.enabledListChat  = open
  }

}
