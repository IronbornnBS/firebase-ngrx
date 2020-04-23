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
    entityId: '',
    entityFullName: '',
    startDate: '',
    anniversaryDate: '',
    renewalDate: '',
    annuityAmount: 0,
  };
  constructor(private store: Store<fromRoot.State>,
              private route: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.annuity.startDate = moment(this.annuity.startDate).format('LL');
    this.annuity.anniversaryDate = moment(this.annuity.startDate).add(1, 'year').format('LL');
    this.annuity.renewalDate = moment(this.annuity.anniversaryDate).subtract(1, 'month').format('LL');

    this.store.dispatch(new annuityActions.CreateAnnuity(this.annuity));
  }

  clearFields() {

  }
}
