import { AnnuityState } from './annuity-state.model';
import { AnnuityActions } from './annuity.actions';
import { AnnuitiesActionTypes } from './annuity.type';

const initialState: AnnuityState = {
  currentAnnuityId: '',
  annuities: [],
  error: '',
};

export function reducer(state = initialState, action: AnnuityActions) {
  switch (action.type) {
    case AnnuitiesActionTypes.LoadSuccess:
      return {
        ...state,
        annuities: action.payload,
        error: '',
      };
    case AnnuitiesActionTypes.LoadFail:
      return {
        ...state,
        annuities: [],
        error: action.payload,
      };
    case AnnuitiesActionTypes.InitializeCurrentAnnuity:
      return {
        ...state,
        currentAnnuityId: '',
      };
    case AnnuitiesActionTypes.SetCurrentAnnuity:
      return {
        ...state,
        currentAnnuityId: action.payload.EntityId,
      };
    case AnnuitiesActionTypes.CreateAnnuitySuccess:
      return {
        ...state,
        annuities: [...state.annuities],
        currentAnnuitiesId: '',
        error: '',
      };
    case AnnuitiesActionTypes.CreateAnnuityFail:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
