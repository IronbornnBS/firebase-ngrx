import { Routes } from '@angular/router';
import { AnnuityListComponent } from '../../containers/annuity/annuity-list/annuity-list.component';
import { MaintainanceListComponent } from '../../containers/maintainance/maintainance-list/maintainance-list.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'annuity-list', component: AnnuityListComponent},
  {path: 'maintainance-list', component: MaintainanceListComponent}
];
