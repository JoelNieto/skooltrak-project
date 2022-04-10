import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getLogged = createSelector(
  getAuthState,
  (state: AuthState) => state.logged
);

export const getError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);

export const getRoleGroup = createSelector(
  getAuthState,
  (state: AuthState) => state.role
);

export const getUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getRole = createSelector(getUser, (state) => state?.role);

export const getAccessToken = createSelector(
  getAuthState,
  (state: AuthState) => state.accessToken
);

export const getUserName = createSelector(
  getUser,
  (state) => `${state?.firstname} ${state?.lastname}`
);
