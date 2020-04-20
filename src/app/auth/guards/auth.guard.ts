import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  getUser = () => this.authService.getAuthState();

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getUser().pipe(
      take(1),
      switchMap((user) => {
        if (!user) {
          this.router.navigateByUrl('/login');
          return of(false);
        }
        return of(true);
      }),
      catchError(() => {
        this.router.navigateByUrl('/login');
        return of(false);
      })
    );
  }
}
