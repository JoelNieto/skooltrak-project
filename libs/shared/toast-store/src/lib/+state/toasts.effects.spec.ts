import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ToastsActions from './toasts.actions';
import { ToastsEffects } from './toasts.effects';

describe('ToastsEffects', () => {
  let actions: Observable<Action>;
  let effects: ToastsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ToastsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ToastsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ToastsActions.init() });

      const expected = hot('-a-|', {
        a: ToastsActions.loadToastsSuccess({ toasts: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
