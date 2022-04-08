import { createAction, props } from '@ngrx/store';
import { Login, LoginPayload, RoleGroup } from '@skooltrak-project/data/models';

export enum AuthActionTypes {
  Init = '[AUTH] Init',
  Test = '[AUTH] Test',
  Login = '[AUTH] Login',
  LoginSuccess = '[AUTH] Login Success',
  LoginFailed = '[AUTH] Login Failed',
}

export const test = createAction(AuthActionTypes.Test);

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
  props<{ error: any }>()
);

export const fromAuthActions = {
  init,
  test,
  login,
  loginSuccess,
  loginFailed,
};
