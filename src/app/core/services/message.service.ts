import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  idChat:string = '';

  chatToOpen!: Contact;

  constructor(private firestore: AngularFirestore) {

  }

   listContact()  {
      return this.firestore.collection<Contact[]>('users').valueChanges();
  }

   listChat(id:string){
    return this.firestore.collection('users').doc(id).collection('chat').valueChanges();
  }

   getMessage(idUser: string, idChat:string) {
    return this.firestore.collection('users').doc(idChat).valueChanges();
  }

  async createChat(uidOwn: string, uid:string) {
    let body = {
      users: `${uidOwn},${uid}`,
      chats:[]
    }
    let id = this.firestore.createId();
    this.idChat = id;
    return await this.firestore.collection('chat').doc(id).set(body);
  }

  updateChatUsers(id: string, name:string){
    return this.firestore.collection(`users/`).doc(id).collection('chat').doc(this.idChat).set({id:this.idChat, userName: name});
  }

  listMessageChat(id:string){
    return this.firestore.collection('chat').doc(id).valueChanges();
  }

  async sendMessage(id: string, message:any){
    return await this.firestore.collection('chat').doc(id).set(message);
  }

  updateLastMessage(id:string, idChat: string, lastMessage:string, lastTime: string){
    return this.firestore.collection(`users/`).doc(id).collection('chat').doc(idChat).update({lastMessage:lastMessage, lastConection:lastTime});
  }

  openChat(chat:Contact) {
    this.chatToOpen  = chat;
  }

  getCurrentChat(){
    return this.chatToOpen;
  }
}
