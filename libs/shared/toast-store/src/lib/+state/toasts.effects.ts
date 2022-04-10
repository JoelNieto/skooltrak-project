import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

import * as ToastsAction from './toasts.actions';

@Injectable()
export class ToastsEffects {
  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  successToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToastsAction.showSuccessToast),
        map(({ message }) =>
          this.Toast.fire({ icon: 'success', title: message })
        )
      ),
    { dispatch: false }
  );

  errorToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToastsAction.showErrorToast),
        map(({ message }) => this.Toast.fire({ icon: 'error', title: message }))
      ),
    { dispatch: false }
  );

  warningToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToastsAction.showWarningToast),
        map(({ message }) =>
          this.Toast.fire({ icon: 'warning', title: message })
        )
      ),
    { dispatch: false }
  );

  infoToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ToastsAction.showInfoToast),
        map(({ message }) => this.Toast.fire({ icon: 'info', title: message }))
      ),
    { dispatch: false }
  );

  constructor(private readonly actions$: Actions) {}
}
