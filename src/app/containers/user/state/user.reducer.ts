import { UserState } from './user-state.model';
import { UserActions } from './user.actions';
import { UserActionTypes } from './user.type';

const initialState: UserState = {
  uid: '',
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.SetCurrentUser:
      return {
        ...state,
        uid: action.payload,
      };
    case UserActionTypes.ClearCurrentUser:
      return {
        ...state,
        uid: null,
      };
      case UserActionTypes.LoginSuccess:
        return {
          ...state,
          uid: action.payload
        };
      case UserActionTypes.LoginFail:
        return {
          ...state,
          uid: null
        };
      case UserActionTypes.RegisterSuccess:
        return {
          ...state,
          uid: action.payload
        };
      case UserActionTypes.RegisterFail:
        return {
          ...state,
          uid: null
        };

    default:
      return state;
  }
}
