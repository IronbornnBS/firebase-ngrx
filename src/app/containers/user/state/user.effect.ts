import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/shared/services/user.service';
import { UserActionTypes } from '../state/user.type';
import * as userActions from '../state/user.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { User } from 'src/app/_interfaces/user.model';

@Injectable({ providedIn: 'root' })
export class UserEffect {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  Login$ = this.actions$.pipe(
    ofType(UserActionTypes.Login),
    map((action: userActions.Login) => action.payload),
    mergeMap((user: User) =>
      this.userService
        .login(user.email, user.password)
        .then((data) => new userActions.LoginSuccess(data.user.uid))
        .catch((error) => new userActions.LoginFail(error.message))
    )
  );

  @Effect()
  Register$ = this.actions$.pipe(
    ofType(UserActionTypes.Register),
    map((action: userActions.Register) => action.payload),
    mergeMap((user: User) =>
      this.userService
        .register(user.email, user.password)
        .then((data) => new userActions.RegisterSuccess(data.user.uid))
        .catch((error) => new userActions.RegisterFail(error.message))
    )
  );
}
