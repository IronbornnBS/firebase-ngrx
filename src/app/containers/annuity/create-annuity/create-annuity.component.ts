import { Component, OnInit } from '@angular/core';
import { Annuity } from 'src/app/_interfaces/annuity.model';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as fromRoot from '../../../state/app.state';
import * as annuityActions from '../state/annuity.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-annuity',
  templateUrl: './create-annuity.component.html',
  styleUrls: ['./create-annuity.component.scss']
})
export class CreateAnnuityComponent implements OnInit {

  annuity: Annuity = {
    EntityId: '',
    EntityFullName: '',
    StartDate: '',
    AnniversaryDate: '',
    RenewalDate: '',
    AnnuityAmount: 0,
  };
  constructor(private store: Store<fromRoot.State>,
              private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.annuity.StartDate = moment(this.annuity.StartDate).format('LL');
    this.annuity.AnniversaryDate = moment(this.annuity.StartDate).add(1, 'year').format('LL');
    this.annuity.RenewalDate = moment(this.annuity.AnniversaryDate).subtract(1, 'month').format('LL');

    this.store.dispatch(new annuityActions.CreateAnnuity(this.annuity));
  }

  clearFields() {

  }
}
