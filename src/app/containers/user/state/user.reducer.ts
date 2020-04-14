import { UserState } from './user-state.model';
import { UserActions } from './user.actions';
import { UserActionTypes } from './user.type';

const initialState: UserState = {
  uid: '',
  error: ''
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.SetCurrentUser:
      return {
        ...state,
        uid: action.payload,
        error: ''
      };
    case UserActionTypes.ClearCurrentUser:
      return {
        ...state,
        uid: null,
        error: ''
      };
      case UserActionTypes.LoginSuccess:
        return {
          ...state,
          uid: action.payload,
          error: ''
        };
      case UserActionTypes.LoginFail:
        return {
          ...state,
          uid: null,
          error: action.payload
        };
      case UserActionTypes.RegisterSuccess:
        return {
          ...state,
          uid: action.payload,
          error: ''
        };
      case UserActionTypes.RegisterFail:
        return {
          ...state,
          uid: null,
          error: action.payload
        };

    default:
      return state;
  }
}
