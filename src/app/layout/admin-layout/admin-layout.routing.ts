import { Routes } from '@angular/router';
import { AnnuityListComponent } from '../../containers/annuity/annuity-list/annuity-list.component';
import { MaintainanceListComponent } from '../../containers/maintainance/maintainance-list/maintainance-list.component';
import { CreateAnnuityComponent } from '../../containers/annuity/create-annuity/create-annuity.component';
import { EditAnnuityComponent } from 'src/app/containers/annuity/edit-annuity/edit-annuity.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'annuity-list', component: AnnuityListComponent},
  {path: 'create-annuity', component: CreateAnnuityComponent},
  {path: 'edit-annuity', component: EditAnnuityComponent},
  {path: 'maintainance-list', component: MaintainanceListComponent},
];
