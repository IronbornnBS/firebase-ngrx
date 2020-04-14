import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './state/app.state';
import { UserSelector } from './containers/user/state/user.selector';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  uid = null;
  constructor(private route: Router,
              private store: Store<fromRoot.State>,
              private userSelector: UserSelector) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(this.userSelector.getCurrentUser),
      map(authed => {
        if (!authed) {
          this.route.navigate(['/login']);
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
