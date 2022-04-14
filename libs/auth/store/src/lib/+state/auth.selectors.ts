import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const selectLogged = createSelector(
  selectAuthState,
  (state: AuthState) => state.logged
);

export const selectError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectRoleGroup = createSelector(
  selectAuthState,
  (state: AuthState) => state.role
);

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectRole = createSelector(selectUser, (state) => state?.role);

export const selectLogging = createSelector(
  selectAuthState,
  (state) => state.logging
);

export const selectAccessToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.accessToken
);

export const selectUserName = createSelector(
  selectUser,
  (state) => `${state?.firstname} ${state?.lastname}`
);
