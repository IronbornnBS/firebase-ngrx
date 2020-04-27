import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './containers/projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectCardComponent } from './containers/project-card/project-card.component';
import { ProjectListComponent } from './containers/project-list/project-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './store/projects.effects';
import * as fromProjects from './store/projects.reducer';
import { ProjectsTableComponent } from './containers/projects-table/projects-table.component';
import { ProjectModalComponent } from './containers/project-modal/project-modal.component';
import { ConfirmModalComponent } from './containers/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent, ProjectListComponent, ProjectsTableComponent, ProjectModalComponent, ConfirmModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    StoreModule.forFeature('projects', fromProjects.projectsReducer),
    EffectsModule.forFeature([ProjectsEffects]),
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
