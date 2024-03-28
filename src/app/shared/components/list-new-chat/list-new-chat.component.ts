import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../../core/models/contact';
import { AuthService } from '../../../core/services/auth.service';
import { MessagesService } from '../../../core/services/message.service';

@Component({
  selector: 'app-list-new-chat',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './list-new-chat.component.html',
  styleUrls: ['./list-new-chat.component.css']
})
export default class ListNewChatComponent {

  user!:Contact;
  usersChat:Contact[] = [];

  @Output() createdChat = new EventEmitter<boolean>();

  constructor(private chatService: MessagesService, private authService: AuthService) {
    this.authService.user.subscribe(res=>{
      this.user = res;
      this.listContacts()
    })
    
  }

  contacts :Contact[] = [];
  chats :Contact[] = [];

  listContacts(){
    this.chatService.listContact().subscribe((result:any[]) => {
      this.contacts = result;
    })

    this.chatService.listChat(this.user.uid).subscribe((result:any[]) => { 
      this.chats = result;
    })
  }

  createNewChat(item:Contact){
    if(this.chats.some(chat => chat.userName === item.userName)){
      const findChat = this.chats.find(chat => chat.userName === item.userName) as Contact;
        this.chatService.openChat(findChat);
        this.createdChat.emit(true); 
        return;
    }

    this.chatService.createChat( this.user.uid, item.uid).then(resp=>{
      this.usersChat.push(item);
      for (const user of this.contacts) {
        if(user.uid == this.user.uid){
          this.usersChat.push(user);
        } 
      }
      let c = 0;
      for (const item of this.usersChat) {
        this.updateChats(item.uid, (c==0)?this.usersChat[c+1].userName: this.usersChat[c-1].userName);
        c++;
      }
    })
  }

  updateChats(id:string, name:string){
    this.chatService.updateChatUsers(id, name).then(resp=>{ 
      this.createdChat.emit(true);
    })
  }
}
