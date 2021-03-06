import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnnuityState } from './annuity-state.model';

@Injectable({
  providedIn: 'root',
})
export class AnnuitySelector {
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
          entityId: '',
          entityFullName: '',
          startDate: '',
          anniversaryDate: '',
          renewalDate: '',
          annuityAmount: 0
        };
      } else {
        return currentAnnuityId ? state.annuities.find(p => p.entityId === currentAnnuityId) : null;
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
