import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnnuityState } from './annuity-state.model';

@Injectable({
  providedIn: 'root',
})
export class AnnuitySeletor {
  private getAnnuitiesFeatureState = createFeatureSelector<AnnuityState>(
    'annuities'
  );

  public getCurrentAnnuityId = createSelector(
    this.getAnnuitiesFeatureState,
    state => state.currentAnnuityId
  );

  public getShowCurrentAnnuity = createSelector(
    this.getAnnuitiesFeatureState,
    this.getCurrentAnnuityId,
    (state, currentAnnuityId) => {
      if ( currentAnnuityId === '') {
        return {
          id: '',
          EntityId: '',
          EntityFullName: '',
          StartDate: '',
          AnniversaryDate: '',
          RenewalDate: '',
          AnnuityAmount: 0
        };
      } else {
        return currentAnnuityId ? state.annuities.find(p => p.id === currentAnnuityId) : null;
      }
    }
  );

  public getShowAnnuities = createSelector(
    this.getAnnuitiesFeatureState,
    state => state.annuities
  );

  public getError = createSelector(
    this.getAnnuitiesFeatureState,
    state => state.error
  );
}
