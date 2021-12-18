import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import  firebase from 'firebase/compat/app';
import { User } from '../models/models';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) { 
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  addUser(user: any) {
    // Persist a document id
    let newUser:User = {'uid':user.uid, 'email':user.email, 'displayName':user.displayName, isAdmin:false}
      this.usersCollection.doc(user.uid).set(newUser);
  }

   getUser(uid:string):Observable<firebase.firestore.DocumentSnapshot<User>>{
    let user =  this.afs.collection<User>('users').doc(uid).get(); 
    return user;
  }
}
