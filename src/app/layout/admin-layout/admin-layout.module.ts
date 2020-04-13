import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { AnnuityListComponent } from 'src/app/containers/annuity/annuity-list/annuity-list.component';
import { MaintainanceListComponent } from 'src/app/containers/maintainance/maintainance-list/maintainance-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes)
  ],
  exports: [],
  declarations: [
    AnnuityListComponent,
    MaintainanceListComponent
  ],
  providers: [],
})
export class AdminLayoutModule { }
