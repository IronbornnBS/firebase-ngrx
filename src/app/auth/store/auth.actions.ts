import { Action } from '@ngrx/store';
import { AuthActionTypes } from './auth.enum';
import { User } from '../models/user.model';

export class RegisterRequested implements Action {
  readonly type = AuthActionTypes.REGISTER_REQUESTED;

  constructor(public payload: { username: string, email: string; password: string }) {}
}

export class RegisterCompleted implements Action {
  readonly type = AuthActionTypes.REGISTER_COMPLETED;
}

export class RegisterFailed implements Action {
  readonly type = AuthActionTypes.REGISTER_FAILED;

  constructor(public payload: { error: any }) {}
}

export class UpdateProfile implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE;

  constructor(public payload: { displayName: string, photoUrl: string }) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginRequested implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class LogoutRequested implements Action {
  readonly type = AuthActionTypes.LOGOUT_REQUESTED;

  constructor(public payload: { user: User }) {}
}

export class LogoutCompleted implements Action {
  readonly type = AuthActionTypes.LOGOUT_COMPLETED;
}

export class SaveUser implements Action {
  readonly type = AuthActionTypes.SAVE_USER;

  constructor(public payload: { user: User }) {}
}

export class UpdateOnlineStatus implements Action {
  readonly type = AuthActionTypes.UPDATE_ONLINE_STATUS;

  constructor(public payload: { uid: string, status: boolean }) {}
}

export class CheckUserRole implements Action {
  readonly type = AuthActionTypes.CHECK_USER_ROLE;

  constructor(public payload: { uid: string }) {}
}

export class UpdateUserRole implements Action {
  readonly type = AuthActionTypes.UPDATE_USER_ROLE;

  constructor(public payload: { isAdmin: boolean }) {}
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GET_USER;
}

export class AuthError implements Action {
  readonly type = AuthActionTypes.AUTH_ERROR;

  constructor(public payload: { error: any }) {}
}

export type AuthAction =
  | RegisterRequested
  | RegisterCompleted
  | RegisterFailed
  | UpdateProfile
  | UpdateProfileSuccess
  | LoginRequested
  | LoginSuccess
  | LoginFailed
  | LogoutRequested
  | LogoutCompleted
  | SaveUser
  | UpdateOnlineStatus
  | CheckUserRole
  | UpdateUserRole
  | GetUser
  | AuthError;
