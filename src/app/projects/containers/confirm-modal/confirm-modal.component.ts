import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  confirmation: Subject<boolean> = new Subject();

  constructor(public modalRef: MatDialogRef<ConfirmModalComponent>) { }

  ngOnInit() {
  }

  onDelete() {
    this.confirmation.next(true);
    this.modalRef.close();
  }

}
