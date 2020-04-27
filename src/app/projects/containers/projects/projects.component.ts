import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { getAllLoaded, getProjects } from '../../store/projects.selectors';
import { map, take } from 'rxjs/operators';
import * as fromProjects from '../../store/projects.actions';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[] | null>;
  isLoading$: Observable<boolean>;
  customers: Project[];
  cus: Project = {
    description: '',
    photoUrl: '',
    title: '',
  };

  projectData: Project = {
    description: '',
    photoUrl: '',
    title: '',
  };

  constructor(
    private store: Store<AppState>,
    private afAuth: AngularFireAuth,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getAllLoaded);
    this.projects$ = this.store.pipe(
      select(getProjects),
      map((projects: Project[]) => {
        if (this.user && !projects) {
          this.store.dispatch(new fromProjects.ProjectsQuery());
        }
        this.customers = projects;
        return projects;
      })
    );
  }

  get user() {
    return this.afAuth.currentUser;
  }

  onProjectDelete(project: Project) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      width: '900px',
      data: {
        title: this.projectData.title,
        description: this.projectData.description,
        photoUrl: this.projectData.photoUrl,
      },
    });

    dialogRef.componentInstance.confirmation.pipe(take(1)).subscribe( (confirmation: boolean) => {
      if (confirmation) {
        this.store.dispatch(new fromProjects.ProjectDeleted({ project }));
      }
    });
  }

  onProjectEdit(project: Project) {
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '900px',
      data: {
        title: this.projectData.title,
        description: this.projectData.description,
        photoUrl: this.projectData.photoUrl,
      },
    });
    const projectCopy = project;
    dialogRef.componentInstance.data = projectCopy;

    dialogRef.componentInstance.projectData.pipe(take(1)).subscribe( (projectData: Project) => {
      this.store.dispatch(new fromProjects.ProjectEdited({ project: projectData }));
    });
  }

  openAddProjectModal() {
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '900px',
      data: {
        title: this.projectData.title,
        description: this.projectData.description,
        photoUrl: this.projectData.photoUrl,
      },
    });

    dialogRef.componentInstance.projectData.pipe(take(1)).subscribe( (projectData: Project) => {
      this.store.dispatch(new fromProjects.ProjectAdded({ project: projectData }));
    });
  }
}
