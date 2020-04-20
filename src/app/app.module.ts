import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ng6-toastr-notifications';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app.routing';
import { environment } from 'src/environments/environment';

import { AuthModule } from './auth/auth.module';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),
    StoreDevtoolsModule.instrument({
      name: 'Capture Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    ToastrModule.forRoot(),
    AppRouteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
