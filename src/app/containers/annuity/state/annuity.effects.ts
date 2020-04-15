import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AnnuityService } from 'src/app/shared/services/annuity.service';
import { AnnuitiesActionTypes } from './annuity.type';
import * as annuitiesActions from './annuity.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Annuity } from 'src/app/_interfaces/annuity.model';

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
        catchError(error => of(new annuitiesActions.LoadFail(error)))
      )
    )
  )
);

@Effect()
createAnnuity$ = this.actions$.pipe(
  ofType(AnnuitiesActionTypes.CreateAnnuity),
  map((action: annuitiesActions.CreateAnnuity) => action.payload),
  mergeMap((annuity: Annuity) =>
    this.annuityService.create(annuity).pipe(
      map(newProduct => (new annuitiesActions.CreateAnnuitySuccess(newProduct))),
      tap( () => {
        // toast message for success creation
      }),
      catchError(error => of(new annuitiesActions.CreateAnnuityFail(error)))
    )
  )
);

}
