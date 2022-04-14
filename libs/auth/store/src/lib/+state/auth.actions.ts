import { createAction, props } from '@ngrx/store';
import { Login, LoginPayload, PayloadUser, RoleGroup } from '@skooltrak-project/data/models';

export enum AuthActionTypes {
  Init = '[AUTH] Init',
  Login = '[AUTH] Login',
  LoginSuccess = '[AUTH] Login Success',
  LoginFailed = '[AUTH] Login Failed',
  LoadProfile = '[AUTH] Load Profile',
  LoadProfileSuccess = '[AUTH] Load Profile Success',
  SignOut = '[AUTH] Sign out',
}

export const init = createAction(
  AuthActionTypes.Init,
  props<{ role: RoleGroup }>()
);

export const login = createAction(
  AuthActionTypes.Login,
  props<{ request: Login }>()
);
export const loginSuccess = createAction(
  AuthActionTypes.LoginSuccess,
  props<{ payload: LoginPayload }>()
);

export const loginFailed = createAction(
  AuthActionTypes.LoginFailed,
  props<{ error: unknown }>()
);

export const loadProfile = createAction(AuthActionTypes.LoadProfile);

export const loadProfileSuccess = createAction(
  AuthActionTypes.LoadProfileSuccess,
  props<{ user: PayloadUser }>()
);

export const signOut = createAction(AuthActionTypes.SignOut);

export const fromAuthActions = {
  init,
  login,
  loginSuccess,
  loginFailed,
  loadProfile,
  loadProfileSuccess,
  signOut,
};
