import { createReducer, on } from '@ngrx/store';
import { PayloadUser, RoleGroup } from '@skooltrak-project/data/models';

import { fromAuthActions } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  user: PayloadUser | undefined;
  role: RoleGroup | undefined;
  logging: boolean;
  accessToken?: string | undefined;
  logged: boolean;
  error?: unknown;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  user: undefined,
  role: undefined,
  logging: false,
  accessToken: undefined,
  logged: false,
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(
    fromAuthActions.init,
    (state, { role }): AuthState => ({ ...state, role })
  ),
  on(
    fromAuthActions.login,
    (state): AuthState => ({ ...state, logging: true })
  ),
  on(
    fromAuthActions.loginSuccess,
    (state, { payload }): AuthState => ({
      ...state,
      accessToken: payload.access_token,
      logged: true,
      logging: false,
    })
  ),
  on(
    fromAuthActions.loginFailed,
    (state, { error }): AuthState => ({
      ...state,
      error,
      logging: false,
    })
  ),
  on(
    fromAuthActions.loadProfileSuccess,
    (state, { user }): AuthState => ({
      ...state,
      user,
    })
  ),
  on(fromAuthActions.signOut, (): AuthState => initialState)
);
