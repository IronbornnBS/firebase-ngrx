import { Component, OnInit } from '@angular/core';
import { Annuity } from 'src/app/_interfaces/annuity.model';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
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
      anniversaryDate: this.annuity.anniversaryDate,
      entityFullName: data.EntityFullName,
      entityId: this.annuity.entityId,
      annuityAmount: data.AnnuityAmount,
      renewalDate: this.annuity.renewalDate,
      startDate: this.annuity.startDate
    };
     this.store.dispatch(new annuityActions.UpdateAnnuity(a));

  }

  deleteCustomer(id: string) {
    this.store.dispatch(new annuityActions.DeleteAnnuity(id));
  }

  onFormChanged() {

    if (
      this.annuity.entityId === undefined ||
      this.annuity.entityFullName === undefined ||
      this.annuity.annuityAmount === undefined
    ) {
      return;
    }


    if (this.annuity.entityFullName.length > 0) {
          this.formValid = true;
      } else {
        this.formValid = false;
      }

  }
}
