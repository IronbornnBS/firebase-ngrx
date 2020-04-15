import { Component, OnInit } from '@angular/core';
import { Annuity } from 'src/app/_interfaces/annuity.model';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as moment from 'moment';
import * as fromRoot from '../../../state/app.state';
import * as annuityActions from '../state/annuity.actions';
import { Store, select } from '@ngrx/store';
import { AnnuitySelector } from '../state/annuity.selector';

@Component({
  selector: 'app-edit-annuity',
  templateUrl: './edit-annuity.component.html',
  styleUrls: ['./edit-annuity.component.scss']
})
export class EditAnnuityComponent implements OnInit {
  public annuity: Annuity;
  formValid: boolean;

  constructor( private store: Store<fromRoot.State>,
               private annuitySelector: AnnuitySelector,
               private route: Router,
               private toastr: ToastrManager) { }

  ngOnInit() {

    this.store.pipe(
      select(this.annuitySelector.getShowCurrentAnnuity))
      .subscribe( (currentAnnuity: Annuity) => this.annuity = currentAnnuity as Annuity );
  }

  onSubmit(data) {
     const a: Annuity = {
      AnniversaryDate: this.annuity.AnniversaryDate,
      EntityFullName: data.EntityFullName,
      EntityId: this.annuity.EntityId,
      AnnuityAmount: data.AnnuityAmount,
      RenewalDate: this.annuity.RenewalDate,
      StartDate: this.annuity.StartDate
    };
     this.store.dispatch(new annuityActions.UpdateAnnuity(a));

  }

  deleteCustomer(id: string) {
    this.store.dispatch(new annuityActions.DeleteAnnuity(id));
  }

  onFormChanged() {

    if (
      this.annuity.EntityId === undefined ||
      this.annuity.EntityFullName === undefined ||
      this.annuity.AnnuityAmount === undefined
    ) {
      return;
    }


    if (this.annuity.EntityFullName.length > 0) {
          this.formValid = true;
      } else {
        this.formValid = false;
      }

  }
}
