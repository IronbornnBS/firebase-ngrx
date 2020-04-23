import * as fromRoot from '../../../state/app.state';
import { Annuity } from 'src/app/_interfaces/annuity.model';

export interface State extends fromRoot.State {
  annuities: AnnuityState;
}

export interface AnnuityState {
  currentAnnuityId: string | null;
  annuities: Annuity[];
  error: string;
}
