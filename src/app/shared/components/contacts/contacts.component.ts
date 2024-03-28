import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../../core/models/contact';
import { AuthService } from '../../../core/services/auth.service';
import { MessagesService } from '../../../core/services/message.service';

@Component({
  selector: 'app-contacts',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent{

  user!:Contact;
  contacts! :Contact[];
  @Output() openeddChat = new EventEmitter<any>();

  constructor(private chatService: MessagesService, private authService: AuthService) { 
    this.authService.user.subscribe(res=>{
      this.user = res;
      this.getListChat();
    })
  }

  getListChat(){
    this.chatService.listChat(this.user.uid).subscribe((result:any[]) => { 
      this.contacts = result;
    })
  }

  openChat(item:any){ 
      this.openeddChat.emit(item);
  }

}
