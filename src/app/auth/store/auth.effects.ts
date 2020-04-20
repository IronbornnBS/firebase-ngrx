import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { GravatarService } from 'src/app/shared/services/gravatar.service';
import { AuthActionTypes } from './auth.enum';
import * as auth from './../store/auth.actions';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private gravatarService: GravatarService,
    private router: Router
  ) {}

  @Effect()
  registerAction$ = this.actions$.pipe(
    ofType(AuthActionTypes.REGISTER_REQUESTED),
    map((action: auth.RegisterRequested) => action.payload),
    switchMap((payload) =>
      this.authService.register(payload.email, payload.password).pipe(
        map((res) => {
          const gravatarUrl = this.gravatarService.getUserGravatar(
            res.user.email
          );
          const user = {
            uid: res.user.uid,
            displayName: payload.username || res.user.displayName,
            email: res.user.email,
            providerId: res.additionalUserInfo.providerId,
            photoUrl: res.user.photoURL || gravatarUrl,
            isNewUser: res.additionalUserInfo.isNewUser,
            isAdmin: false,
            isOnline: true,
          };
          return user;
        }),
        switchMap((user: User) => {
          return [
            new auth.RegisterCompleted(),
            new auth.LoginSuccess({ user }),
            new auth.UpdateProfile({
              displayName: payload.username,
              photoUrl: user.photoUrl,
            }),
            new auth.SaveUser({ user }),
          ];
        }),
        tap(() => {
          this.router.navigate(['/']);
        }),
        catchError((error) => of(new auth.AuthError({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  saveUser$ = this.actions$.pipe(
    ofType(AuthActionTypes.SAVE_USER),
    map( (action: auth.SaveUser) => action.payload),
    switchMap( (payload: any) => this.authService.saveUser(payload.user))
  );

  @Effect({ dispatch: false })
  updateOnlineStatus$ = this.actions$.pipe(
    ofType(AuthActionTypes.UPDATE_ONLINE_STATUS),
    map( (action: auth.UpdateOnlineStatus) => action.payload),
    switchMap( (payload: any) => this.authService.updateOnlineStatus(payload.uid, payload.status))
  );

  @Effect()
  loginAction$ = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_REQUESTED),
    map((action: auth.LoginRequested) => action.payload),
    switchMap(payload =>
      this.authService.login(payload.email, payload.password).pipe(
        map((res: any) => {
          const user = {
            uid: res.user.uid,
            displayName: res.user.displayName,
            email: res.user.email,
            providerId: res.additionalUserInfo.providerId,
            photoUrl: res.user.photoURL,
            isNewUser: res.additionalUserInfo.isNewUser
          };
          return new auth.LoginSuccess( {user });
        }),
        tap(() => this.router.navigateByUrl('/login')),
        catchError(error => of(new auth.AuthError({ error })))
      )
    )
  );

}
