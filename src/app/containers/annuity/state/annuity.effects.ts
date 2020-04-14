import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AnnuityService } from 'src/app/shared/services/annuity.service';
import { AnnuitiesActionTypes } from './annuity.type';
import * as annuitiesActions from './annuity.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnuityEffect {
  constructor(
    private actions$: Actions,
    private annuityService: AnnuityService
  ) {}

  @Effect()
  loadAnnuities$ = this.actions$.pipe(
    ofType(AnnuitiesActionTypes.Load),
    mergeMap((action: annuitiesActions.Load) =>
      this.annuityService.get().pipe(
        map(data => new annuitiesActions.LoadSuccess(data.map(annuities => annuities.payload.doc.data())),
        catchError(err => of(new annuitiesActions.LoadFail(err)))
      )
    )
  )
);

}
