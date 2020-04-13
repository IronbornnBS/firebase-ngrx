import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-maintainance-list',
  templateUrl: './maintainance-list.component.html',
  styleUrls: ['./maintainance-list.component.scss']
})
export class MaintainanceListComponent implements OnInit {
  headElements = [
    'Entity Full Name',
    'Entity ID',
    'Product',
    'Product Category',
    'Item',
    'Qty',
    'Unit Price',
    'Total Amount',
    'Start Date',
    'Renewal Date'
  ];
  customers: any[] = [];

  constructor( private route: Router) { }

  ngOnInit() {
  }

  createMaintainanceCustomer() {
    this.route.navigate(['/create-maintainance']).then(() => { }, () => { });
  }

  UpdateStore(data) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: data
      }
    };
    this.route.navigate(['/edit-maintainance'], navigationExtras);
  }
}
