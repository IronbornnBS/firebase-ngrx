import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HomeComponent, WelcomeComponent, DashboardComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    WelcomeComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
