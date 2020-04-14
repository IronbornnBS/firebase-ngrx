import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/shared/services/user.service';
import { UserActionTypes } from '../state/user.type';
import * as userActions from '../state/user.actions';
import { mergeMap, map, catchError, tap, switchMap, exhaustMap } from 'rxjs/operators';
import { User } from 'src/app/_interfaces/user.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserEffect {
  constructor(private actions$: Actions,
              private userService: UserService,
              private route: Router) {}

  @Effect()
  Login$ = this.actions$.pipe(
    ofType(UserActionTypes.Login),
    map((action: userActions.Login) => action.payload),
    exhaustMap((user: User) =>
      this.userService
        .login(user.email, user.password)
        .pipe(
          map(data => new userActions.LoginSuccess(data.user.uid)),
          tap(() => this.route.navigate(['/annuity-list'])),
          catchError(error => of(new userActions.LoginFail(error)))
        ))
  );

  @Effect()
  Register$ = this.actions$.pipe(
    ofType(UserActionTypes.Register),
    map((action: userActions.Register) => action.payload),
    mergeMap((user: User) =>
      this.userService
        .register(user.email, user.password)
        .pipe(
          map(data => new userActions.RegisterSuccess(data.user.uid)),
          tap(() => this.route.navigate(['/annuity-list'])),
          catchError(error => of(new userActions.RegisterFail(error)))
        )
    )
  );
}
