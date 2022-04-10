import { createAction, props } from '@ngrx/store';

export const showSuccessToast = createAction(
  '[TOASTS] Show success toast',
  props<{ message: string }>()
);
export const showErrorToast = createAction(
  '[TOASTS] Show error toast',
  props<{ message: string }>()
);
export const showWarningToast = createAction(
  '[TOASTS] Show warning toast',
  props<{ message: string }>()
);
export const showInfoToast = createAction(
  '[TOASTS] Show info toast',
  props<{ message: string }>()
);
