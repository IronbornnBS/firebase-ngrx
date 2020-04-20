import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, WelcomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
