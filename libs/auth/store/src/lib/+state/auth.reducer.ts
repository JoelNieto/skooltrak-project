import { createReducer, on } from '@ngrx/store';
import { PayloadUser, RoleGroup } from '@skooltrak-project/data/models';

import { fromAuthActions } from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  user: PayloadUser | undefined;
  role: RoleGroup | undefined;
  accessToken?: string | undefined;
  logged: boolean;
  error?: any;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  user: undefined,
  role: undefined,
  accessToken: undefined,
  logged: false,
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.init, (state, { role }) => ({ ...state, role })),
  on(fromAuthActions.loginSuccess, (state, { payload }) => ({
    ...state,
    accessToken: payload.access_token,
    logged: true,
  })),
  on(fromAuthActions.loginFailed, (state, { error }) => ({ ...state, error })),
  on(fromAuthActions.loadProfileSuccess, (state, { user }) => ({
    ...state,
    user,
  }))
);
