import { DocumentReference } from '@angular/fire/firestore';

export class Annuity {
  id?: string;
  EntityId: string;
  EntityFullName: string;
  StartDate: string;
  AnniversaryDate: string;
  RenewalDate: string;
  AnnuityAmount: number;
  EntityRef?: DocumentReference;
}
