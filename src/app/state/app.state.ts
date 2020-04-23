import { UserState } from '../containers/user/state/user-state.model';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
}
