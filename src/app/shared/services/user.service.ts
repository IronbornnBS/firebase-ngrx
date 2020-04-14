import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../_interfaces/user.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private path = 'users';
  collection: AngularFirestoreCollection<User>;

  constructor(
    private fireauth: AngularFireAuth
  ) { }

  login = (email: string, password: string) =>
    from(this.fireauth.signInWithEmailAndPassword(email, password))

  register = (email: string, password: string) =>
    from(this.fireauth.createUserWithEmailAndPassword(email, password))

  logout = () => from(this.fireauth.signOut());
}
