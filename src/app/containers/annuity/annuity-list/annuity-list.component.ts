import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnnuityService } from 'src/app/shared/services/annuity.service';
import { Annuity } from 'src/app/_interfaces/annuity.model';

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
  customers: Annuity[] = [];
  customer: Annuity = {
    EntityId: '',
    EntityFullName: '',
    StartDate: '',
    AnniversaryDate: '',
    RenewalDate: '',
    AnnuityAmount: 0,
  };
  public selectedName: any;
  constructor(private route: Router, private annuityService: AnnuityService) {}

  ngOnInit() {
    this.annuityService.get()
    .subscribe((customers) => {
      this.customers = customers.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Annuity;
      });
    });
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

    // this.route.navigate(['/create']).then(
    //   () => {},
    //   () => {}
    // );
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
