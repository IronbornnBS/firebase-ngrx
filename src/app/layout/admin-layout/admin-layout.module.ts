import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AnnuityListComponent } from 'src/app/containers/annuity/annuity-list/annuity-list.component';
import { MaintainanceListComponent } from 'src/app/containers/maintainance/maintainance-list/maintainance-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/containers/annuity/state/annuity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnnuityEffect } from 'src/app/containers/annuity/state/annuity.effects';
import { CreateAnnuityComponent } from 'src/app/containers/annuity/create-annuity/create-annuity.component';
import { SharedModule } from '../../shared/shared.module';
import { EditAnnuityComponent } from 'src/app/containers/annuity/edit-annuity/edit-annuity.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    StoreModule.forFeature('annuities', reducer),
    EffectsModule.forFeature([AnnuityEffect])
  ],
  exports: [],
  declarations: [
    AnnuityListComponent,
    CreateAnnuityComponent,
    MaintainanceListComponent,
    EditAnnuityComponent
  ],
  providers: [],
})
export class AdminLayoutModule { }
