import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from '../../../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  url = environment.firebaseConfig.databaseURL;
  collection: AngularFirestoreCollection<Project>;

  constructor(private db: AngularFireDatabase, private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
    this.collection = this.firestore.collection('projects', ref => ref.orderBy('title'));
   }

  get userId() {
    if (this.afAuth.currentUser) {
      return this.afAuth.currentUser
      .then(user => user.uid);
    }
  }

  add(project: Project, userId: string) {
    // const projects = this.db.list(`projects/${userId}`);
    return this.collection.add(project);
  }

  addProjects(projects: Project[]) {
    const userId = this.userId;
    projects.forEach( (project: Project) => {
      this.collection.add(project);
    });
  }

  get = (userId: string) => this.collection.snapshotChanges();

  update(project: Project, userId: string) {
    return of(this.db.object(`projects/${userId}/` + project.key)
      .update({
        title: project.title,
        description: project.description,
        photoUrl: project.photoUrl
      }));
  }

  delete(project: Project, userId: string) {
    return this.db.object(`projects/${userId}/` + project.key).remove();
  }
}
