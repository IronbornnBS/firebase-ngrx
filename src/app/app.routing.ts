import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'annuity-list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./layout/admin-layout/admin-layout.module').then(
            (m) => m.AdminLayoutModule
          ), canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRouteModule {}
