import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Annuity } from 'src/app/_interfaces/annuity.model';
import { Store, select } from '@ngrx/store';
import { AnnuitySelector } from '../state/annuity.selector';
import * as fromRoot from '../../../state/app.state';
import * as annuityActions from '../state/annuity.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-annuity-list',
  templateUrl: './annuity-list.component.html',
  styleUrls: ['./annuity-list.component.scss'],
})
export class AnnuityListComponent implements OnInit {
  headElements = [
    'Entity Full Name',
    'Entity ID',
    'Annuity Amount',
    'Start Date',
    'Anniversary Date',
    'Renewal Date',
  ];

  customers$: Observable<Annuity[]>;
  customer: Annuity = {
    EntityId: '',
    EntityFullName: '',
    StartDate: '',
    AnniversaryDate: '',
    RenewalDate: '',
    AnnuityAmount: 0,
  };

  public selectedName: any;
  constructor(private route: Router,
              private store: Store<fromRoot.State>,
              private annuitySelector: AnnuitySelector) {}

  ngOnInit() {

    this.getProducts();
    this.customers$ = this.store.pipe(select(this.annuitySelector.getShowAnnuities));
  }

  getProducts(): void {
    this.store.dispatch(new annuityActions.Load());
  }

  createAnnuityCustomer() {
    this.store.dispatch(new annuityActions.InitializeCurrentAnnuity());
    this.route.navigate(['/create-annuity']);
  }

  UpdateStore(data) {
    this.store.dispatch(new annuityActions.SetCurrentAnnuity(data));
    this.route.navigate(['/edit-annuity']);
  }
}
