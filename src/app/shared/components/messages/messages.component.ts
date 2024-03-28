import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MessagesService } from '../../../core/services/message.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-messages',
  standalone:true,
  imports:[CommonModule, DatePipe],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnChanges {

  @Input() notifyTogetChanges: any;
  @Input() newMessage: any;

  currentChat:any;
  newMessageText:string='';
  chat:any;
  bodyChat : any;
  currentUser:any;
  usersChat! : string []
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  constructor(private messageService: MessagesService, private authService: AuthService) {
    this.authService.user.subscribe(res=>{
      this.currentUser = res;
    })
  }
 
  ngOnChanges(changes: SimpleChanges) { 
    if( changes['notifyTogetChanges'] && this.currentChat!==changes['notifyTogetChanges'].currentValue ){
      this.currentChat = changes['notifyTogetChanges'].currentValue;
      
      this.messageService.listMessageChat(this.currentChat.id).subscribe(result => {
        this.bodyChat = result;
        this.usersChat = this.bodyChat?.users.split(',');
      })
    } else {

      this.newMessageText = changes['newMessage'].currentValue;

      if(this.newMessageText !==''){
          this.bodyChat.chats.push({
            userName: this.currentUser.displayName,
            message: this.newMessageText,
            dateTime: this.formatDate(new Date())
          });

          this.messageService.sendMessage(this.currentChat.id, this.bodyChat).then(res=>{
            for (const user of this.usersChat) {
            this.messageService.updateLastMessage(user,this.currentChat.id, this.newMessageText, this.formatDate(new Date()))
            }

          })
      }
    }
}

 formatDate(date :Date) {
  let day:any = date.getDate();
  let month:any = date.getMonth() + 1;  
  let year:any = date.getFullYear().toString().substr(-2);  
  let hours:any = date.getHours();
  let minutes:any = date.getMinutes();
  let seconds:any = date.getSeconds();

  day = (day < 10) ? '0' + day : day;
  month = (month < 10) ? '0' + month : month;
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}


ngAfterViewChecked() {
  this.scrollToBottom();
}

scrollToBottom(): void {
  try {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  } catch(err) { }
}

}
