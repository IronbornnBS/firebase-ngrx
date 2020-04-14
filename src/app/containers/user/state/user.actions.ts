import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.type';
import { User } from 'src/app/_interfaces/user.model';

export class SetCurrentUser implements Action {
  readonly type = UserActionTypes.SetCurrentUser;

  constructor(public payload: string) { }
}

export class ClearCurrentUser implements Action {
  readonly type = UserActionTypes.ClearCurrentUser;
}
export class Login implements Action {
  readonly type = UserActionTypes.Login;

  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;

  constructor(public payload: string) {}
}

export class LoginFail implements Action {
  readonly type = UserActionTypes.LoginFail;

  constructor(public payload: string) {}
}

export class Register implements Action {
  readonly type = UserActionTypes.Register;

  constructor(public payload: User) {}
}

export class RegisterSuccess implements Action {
  readonly type = UserActionTypes.RegisterSuccess;

  constructor(public payload: string) {}
}

export class RegisterFail implements Action {
  readonly type = UserActionTypes.RegisterFail;

  constructor(public payload: string) {}
}

export type UserActions = SetCurrentUser
| ClearCurrentUser
| LoginSuccess
| LoginFail
| RegisterSuccess
| RegisterFail;
