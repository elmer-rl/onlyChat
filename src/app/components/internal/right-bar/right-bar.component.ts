import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from '../../../shared/components/messages/messages.component';

@Component({
  selector: 'app-right-bar',
  standalone: true,
  imports:[CommonModule, MessagesComponent, FormsModule],
  templateUrl: './right-bar.component.html',
  styleUrls: ['./right-bar.component.css']
})
export class RightBarComponent {

  @Input() dataFromParent: any;
  inputValue  ='';
  changeNotify: any;
  text:string='';
  constructor() { }
 
  ngOnChanges(changes: SimpleChanges) {
      this.changeNotify = changes['dataFromParent'].currentValue;
  }

  sendMessage(){
    this.text = this.inputValue;
    this.inputValue = '';
    console.log(this.text);

  }
}
