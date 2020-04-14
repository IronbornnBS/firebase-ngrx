import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user-state.model';

@Injectable({
  providedIn: 'root',
})
export class UserSelector {
  private getUserFeatureState = createFeatureSelector<UserState>(
    'users'
  );

  public getCurrentUser = createSelector(
    this.getUserFeatureState,
    state => state.uid
  );

  public getError = createSelector(
    this.getUserFeatureState,
    state => state.error
  );
}
