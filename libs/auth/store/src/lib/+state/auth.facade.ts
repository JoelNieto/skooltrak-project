import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RoleGroup } from '@skooltrak-project/data/models';

import * as actions from './auth.actions';
import * as selectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  isLogged$ = this.store.select(selectors.getLogged);
  loggedUser$ = this.store.select(selectors.getUser);
  roleType$ = this.store.select(selectors.getRole);
  accessToken$ = this.store.select(selectors.getAccessToken);

  constructor(private readonly store: Store) {}
  test() {
    this.store.dispatch(actions.test());
  }
  init(role: RoleGroup) {
    this.store.dispatch(actions.init({ role }));
  }
}
