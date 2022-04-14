import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login, RoleGroup } from '@skooltrak-project/data/models';
import { first, switchMap } from 'rxjs';

import { AuthService } from '../services/auth.service';
import * as actions from './auth.actions';
import * as selectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  isLogged$ = this.store.select(selectors.selectLogged);
  loggedUser$ = this.store.select(selectors.selectUser);
  roleType$ = this.store.select(selectors.selectRoleGroup);
  userRole$ = this.store.select(selectors.selectRole);
  accessToken$ = this.store.select(selectors.selectAccessToken);
  userName$ = this.store.select(selectors.selectUserName);

  logging$ = this.store.select(selectors.selectLogging);
  constructor(private readonly store: Store, private service: AuthService) {}

  init = (role: RoleGroup) => this.store.dispatch(actions.init({ role }));

  login = (request: Login) => this.store.dispatch(actions.login({ request }));

  loadProfile = () => this.store.dispatch(actions.loadProfile());

  signOut = () => this.store.dispatch(actions.signOut());

  _login = (req: Login) =>
    this.roleType$.pipe(
      first(),
      switchMap((role) => this.service.login(req, role))
    );

  _loadProfile = () => this.service.profile();
}
