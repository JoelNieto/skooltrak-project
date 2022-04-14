import { Action } from '@ngrx/store';

import * as SubjectsActions from './subjects.actions';
import { SubjectsEntity } from './subjects.models';
import { State, initialState, reducer } from './subjects.reducer';

describe('Subjects Reducer', () => {
  const createSubjectsEntity = (id: string, name = ''): SubjectsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Subjects actions', () => {
    it('loadSubjectsSuccess should return the list of known Subjects', () => {
      const subjects = [
        createSubjectsEntity('PRODUCT-AAA'),
        createSubjectsEntity('PRODUCT-zzz'),
      ];
      const action = SubjectsActions.loadSubjectsSuccess({ subjects });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
