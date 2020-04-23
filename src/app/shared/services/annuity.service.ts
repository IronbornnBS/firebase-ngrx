import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Annuity } from 'src/app/_interfaces/annuity.model';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnuityService {
  private path = 'Annuities';
  collection: AngularFirestoreCollection<Annuity>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection(this.path, ref => ref.orderBy('entityFullName'));
   }

  create = (annuity: Annuity) => from(this.collection.doc(annuity.entityId).set(annuity));

  get = () => this.collection.snapshotChanges();

  update = (annuity: Annuity) => from(this.firestore.doc(`/${this.path}/${annuity.entityId}`).update(annuity));

  delete = (id: string) => from( this.firestore.doc(`/${this.path}/${id}`).delete());
}
