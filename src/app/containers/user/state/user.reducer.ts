import { UserState } from './user-state.model';
import { UserActions } from './user.actions';
import { UserActionTypes } from './user.type';

const initialState: UserState = {
  currentUser: null,
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.SetCurrentUser:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.ClearCurrentUser:
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
}
