import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login, RoleGroup } from '@skooltrak-project/data/models';
import { first, switchMap } from 'rxjs';

import { AuthService } from '../services/auth.service';
import * as actions from './auth.actions';
import * as selectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  isLogged$ = this.store.select(selectors.getLogged);
  loggedUser$ = this.store.select(selectors.getUser);
  roleType$ = this.store.select(selectors.getRoleGroup);
  userRole$ = this.store.select(selectors.getRole);
  accessToken$ = this.store.select(selectors.getAccessToken);
  userName$ = this.store.select(selectors.getUserName);

  logging$ = this.store.select(selectors.getLogging);
  constructor(private readonly store: Store, private service: AuthService) {}

  init = (role: RoleGroup) => this.store.dispatch(actions.init({ role }));

  login = (request: Login) => this.store.dispatch(actions.login({ request }));

  loadProfile = () => this.store.dispatch(actions.loadProfile());

  _login = (req: Login) =>
    this.roleType$.pipe(
      first(),
      switchMap((role) => this.service.login(req, role))
    );

  _loadProfile = () => this.service.profile();
}
