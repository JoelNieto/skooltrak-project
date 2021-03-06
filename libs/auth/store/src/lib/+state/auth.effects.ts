import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastsFacade } from '@skooltrak-project/shared/toast-store';
import { catchError, map, of, switchMap } from 'rxjs';

import { AuthActions } from '../..';
import { AuthFacade } from './auth.facade';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ request }) =>
        this.facade._login(request).pipe(
          map((payload) => AuthActions.loginSuccess({ payload })),
          catchError((error) => of(AuthActions.loginFailed({ error })))
        )
      )
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map(() => this.router.navigate(['/dashboard']))
      );
    },
    { dispatch: false }
  );

  loginSuccessToast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => this.toast.successToast('Bienvenido!'))
    );
  });

  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loadProfile),
      switchMap(() =>
        this.facade
          ._loadProfile()
          .pipe(map((user) => AuthActions.loadProfileSuccess({ user })))
      )
    );
  });

  signOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.signOut),
        map(() => this.router.navigate(['/']))
      );
    },
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly facade: AuthFacade,
    private readonly router: Router,
    private readonly toast: ToastsFacade
  ) {}
}
