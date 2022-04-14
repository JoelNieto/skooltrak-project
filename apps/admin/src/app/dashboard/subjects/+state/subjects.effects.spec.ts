import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as SubjectsActions from './subjects.actions';
import { SubjectsEffects } from './subjects.effects';

describe('SubjectsEffects', () => {
  let actions: Observable<Action>;
  let effects: SubjectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SubjectsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SubjectsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SubjectsActions.init() });

      const expected = hot('-a-|', {
        a: SubjectsActions.loadSubjectsSuccess({ subjects: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
