import { Injectable } from '@angular/core';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { iif, mergeMap, Observable, of } from 'rxjs';

import { AuthFacade } from '../+state/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivateChild {
  constructor(private auth: AuthFacade, private router: Router) {}
  canActivateChild(): Observable<boolean | UrlTree> {
    return this.auth.isLogged$.pipe(
      mergeMap((logged) =>
        iif(() => logged, of(logged), of(this.router.createUrlTree(['/'])))
      )
    );
  }
}
