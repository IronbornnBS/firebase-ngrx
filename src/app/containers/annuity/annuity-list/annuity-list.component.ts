import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnnuityService } from 'src/app/shared/services/annuity.service';
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
              private annuityService: AnnuityService,
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
    this.customer.AnniversaryDate = 'April 26, 2019';
    this.customer.AnnuityAmount = 23425;
    this.customer.EntityFullName = 'Jag';
    this.customer.EntityId = '80000129-1512119372';
    this.customer.RenewalDate = 'March 26, 2019';
    this.customer.StartDate = 'April 26, 2018';

    this.annuityService.create(this.customer).then( res => {
      console.log(res);
    });
  }

  UpdateStore(data) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: data,
      },
    };
    this.route.navigate(['/edit-annuity'], navigationExtras);
  }
}
