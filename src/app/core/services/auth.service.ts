import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any | null>;
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user = afAuth.authState;
  }


  async register(user:string, password:string, userName:string){

  const result: any = await this.afAuth.createUserWithEmailAndPassword(user, password);

  result.user.updateProfile({ displayName: userName });

  const id = this.firestore.createId();

  return this.firestore.collection('users').doc(result?.user.uid).set({
    email:user,
    uid: result.user.uid,
    userName
  })

}

login(user:string, password:string){

  return this.afAuth.signInWithEmailAndPassword(user,password);

}

}
