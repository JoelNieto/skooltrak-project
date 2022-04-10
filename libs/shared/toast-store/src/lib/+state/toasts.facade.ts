import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ToastsActions from './toasts.actions';

@Injectable({ providedIn: 'root' })
export class ToastsFacade {
  constructor(private store: Store) {}

  successToast = (message: string) =>
    ToastsActions.showSuccessToast({ message });
  infoToast = (message: string) => ToastsActions.showInfoToast({ message });
  warningToast = (message: string) =>
    ToastsActions.showWarningToast({ message });
  errorToast = (message: string) => ToastsActions.showErrorToast({ message });
}
