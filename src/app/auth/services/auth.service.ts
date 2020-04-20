import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { from } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore/public_api';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  collection: AngularFirestoreCollection<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.collection = this.firestore.collection('users', (ref) =>
      ref.orderBy('displayName')
    );
  }

  register = (email: string, password: string) =>
    from(this.afAuth.createUserWithEmailAndPassword(email, password))

  updateProfile = (displayName: string, photoUrl: string) => {
    const userProfile = this.afAuth.currentUser;
    if (userProfile) {
      return from(
        userProfile
          .then((profile) =>
            profile.updateProfile({ displayName, photoURL: photoUrl })
          )
          .catch((error) => error)
      ) as any;
    }
  }

  saveUser = (user: User) => this.collection.doc(user.uid).set(user);

  login = (email: string, password: string) =>
    from(this.afAuth.signInWithEmailAndPassword(email, password))

  updateOnlineStatus = (uid: string, status: boolean) => {
    if (status) {
      this.firestore.doc(`users/${uid}`).update({ isOnline: false });
    }
    return from(
      this.firestore.doc(`users/${uid}`).update({ isOnline: status })
    );
  }

  checkUserRole = (uid: string) => {
    return this.firestore.doc(`admins/${uid}`).valueChanges();
  }

  getAuthState = () => this.afAuth.authState;

  getCurrentUser = () => this.afAuth.currentUser;

  logout = () => from(this.afAuth.signOut());
}
