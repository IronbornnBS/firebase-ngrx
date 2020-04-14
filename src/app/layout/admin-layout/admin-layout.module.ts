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


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    StoreModule.forFeature('annuities', reducer),
    EffectsModule.forFeature([AnnuityEffect])
  ],
  exports: [],
  declarations: [
    AnnuityListComponent,
    MaintainanceListComponent
  ],
  providers: [],
})
export class AdminLayoutModule { }
