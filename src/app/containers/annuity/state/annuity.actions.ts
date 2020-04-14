import { Action } from '@ngrx/store';
import { AnnuitiesActionTypes } from './annuity.type';
import { Annuity } from '../../../_interfaces/annuity.model';

export class Load implements Action {
  readonly type = AnnuitiesActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = AnnuitiesActionTypes.LoadSuccess;

  constructor(public payload: Annuity[]) {}
}

export class LoadFail implements Action {
  readonly type = AnnuitiesActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export class SetCurrentAnnuity implements Action {
  readonly type = AnnuitiesActionTypes.SetCurrentAnnuity;

  constructor(public payload: Annuity) {}
}

export class ClearCurrentAnnuity implements Action {
  readonly type = AnnuitiesActionTypes.ClearCurrentAnnuity;
}

export class InitializeCurrentAnnuity implements Action {
  readonly type = AnnuitiesActionTypes.InitializeCurrentAnnuity;
}

export class UpdateAnnuity implements Action {
  readonly type = AnnuitiesActionTypes.UpdateAnnuity;

  constructor(public payload: Annuity) { }
}

export class UpdateAnnuitySuccess implements Action {
  readonly type = AnnuitiesActionTypes.UpdateAnnuitySuccess;

  constructor(public payload: Annuity) { }
}

export class UpdateAnnuityFail implements Action {
  readonly type = AnnuitiesActionTypes.UpdateAnnuityFail;

  constructor(public payload: string) { }
}

export class CreateAnnuity implements Action {
  readonly type = AnnuitiesActionTypes.CreateAnnuity;

  constructor(public payload: Annuity) { }
}

export class CreateAnnuitySuccess implements Action {
  readonly type = AnnuitiesActionTypes.CreateAnnuitySuccess;

  constructor(public payload: Annuity) { }
}

export class CreateAnnuityFail implements Action {
  readonly type = AnnuitiesActionTypes.CreateAnnuityFail;

  constructor(public payload: string) { }
}

export class DeleteAnnuity implements Action {
  readonly type = AnnuitiesActionTypes.DeleteAnnuity;

  constructor(public payload: string) { }
}

export class DeleteAnnuitySuccess implements Action {
  readonly type = AnnuitiesActionTypes.DeleteAnnuitySuccess;

  constructor(public payload: string) { }
}

export class DeleteAnnuityFail implements Action {
  readonly type = AnnuitiesActionTypes.DeleteAnnuityFail;

  constructor(public payload: string) { }
}

export type AnnuityActions =
  | Load
  | LoadSuccess
  | LoadFail
  | SetCurrentAnnuity
  | ClearCurrentAnnuity
  | InitializeCurrentAnnuity
  | CreateAnnuity
  | CreateAnnuitySuccess
  | CreateAnnuityFail
  | DeleteAnnuity
  | DeleteAnnuitySuccess
  | DeleteAnnuityFail
  | UpdateAnnuity
  | UpdateAnnuitySuccess
  | UpdateAnnuityFail;
