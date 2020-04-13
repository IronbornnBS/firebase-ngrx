import { Action } from '@ngrx/store';
import { UserActionTypes } from './user.type';
import { User } from 'src/app/_interfaces/user.model';

export class SetCurrentUser implements Action {
  readonly type = UserActionTypes.SetCurrentUser;

  constructor(public payload: User) { }
}

export class ClearCurrentUser implements Action {
  readonly type = UserActionTypes.ClearCurrentUser;
}

export type UserActions = SetCurrentUser
| ClearCurrentUser;
