import * as fromAuth from '../auth/store/auth.reducer';
import { AuthState } from '../auth/store/auth.state';
import { ActionReducerMap, ActionReducer, Action, MetaReducer } from '@ngrx/store';

export interface AppState {
  auth: AuthState;
  admin: any;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  admin: fromAuth.authReducer
};

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState | undefined, action: Action) => {
    if (action.type === '[Auth] LOGOUT completed') {
      state = undefined;
    }
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = [clearState];
