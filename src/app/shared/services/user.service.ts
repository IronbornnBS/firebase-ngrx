import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../_interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = 'users';
  collection: AngularFirestoreCollection<User>;


  constructor(private firestore: AngularFirestore, private fireauth: AngularFireAuth) {
    this.collection = this.firestore.collection(this.path, ref => ref.orderBy('firstName', 'asc'));
   }

   registration = (data: User) => this.register(data.email, data.password)
   .then(response  => {
     data.uid = response.user.uid;
     data.email = response.user.email.toLowerCase();
     return this.create(data).then(results => results);
   })

   login = (email: string, password: string) => this.fireauth.signInWithEmailAndPassword(email, password);

   create = (data: User) => this.collection.add(data);

   register = (email: string, password: string) => this.fireauth.createUserWithEmailAndPassword(email, password);

}
