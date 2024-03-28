import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ContactsComponent } from '../../../shared/components/contacts/contacts.component';
import ListNewChatComponent from '../../../shared/components/list-new-chat/list-new-chat.component';
import { AuthService } from '../../../core/services/auth.service';
import { MessagesService } from '../../../core/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-bar',
  standalone: true,
  imports:[CommonModule, ContactsComponent, ListNewChatComponent],
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent {
  currentUser : any;
  newCharList:boolean = false;
  @Output() getChat = new EventEmitter<boolean>();
  constructor(private auth:AuthService, private messageService: MessagesService, private router: Router) {
    this.auth.user.subscribe(resp=>{ 
     this.currentUser =  resp.displayName
    })
   } 

  receiveData(data: boolean) {
    if(this.messageService.getCurrentChat()){
      this.openChat(this.messageService.getCurrentChat())
      this.messageService.openChat(null!)
    }
     if(data){
      this.newCharList = false;
     }
  }

  openChat(data: any) { 
    if(data){
      this.getChat.emit(data);
    }
 }
}
