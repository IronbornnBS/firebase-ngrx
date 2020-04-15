import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AnnuityService } from 'src/app/shared/services/annuity.service';
import { AnnuitiesActionTypes } from './annuity.type';
import * as annuitiesActions from './annuity.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Annuity } from 'src/app/_interfaces/annuity.model';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class AnnuityEffect {
  constructor(
    private actions$: Actions,
    private annuityService: AnnuityService,
    public toastr: ToastrManager,
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
      map( () => (new annuitiesActions.CreateAnnuitySuccess())),
      tap( () => this.toastr.successToastr('Created successfully', 'Success!')),
      catchError(error => of(new annuitiesActions.CreateAnnuityFail(error)))
    )
  )
);

@Effect()
updateAnnuity$ = this.actions$.pipe(
  ofType(AnnuitiesActionTypes.UpdateAnnuity),
  map((action: annuitiesActions.UpdateAnnuity) => action.payload),
  mergeMap((annuity: Annuity) =>
    this.annuityService.update(annuity).pipe(
      map(() => (new annuitiesActions.UpdateAnnuitySuccess())),
      tap( () => this.toastr.successToastr('Updated successfully', 'Success!')),
      catchError(error => of(new annuitiesActions.UpdateAnnuityFail(error)))
    )
  )
);

}
