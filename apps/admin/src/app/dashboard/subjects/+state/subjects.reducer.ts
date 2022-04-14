import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Subject } from '@skooltrak-project/data/models';

import * as SubjectsActions from './subjects.actions';

export const SUBJECTS_FEATURE_KEY = 'subjects';

export interface State extends EntityState<Subject> {
  selectedId?: string; // which Subjects record has been selected
  loaded: boolean; // has the Subjects list been loaded
  error?: string | null | unknown; // last known error (if any)
}

export interface SubjectsPartialState {
  readonly [SUBJECTS_FEATURE_KEY]: State;
}

export const selectSubjectid = (x: Subject) => x._id;

export const subjectsAdapter: EntityAdapter<Subject> =
  createEntityAdapter<Subject>({ selectId: selectSubjectid });

export const initialState: State = subjectsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const subjectsReducer = createReducer(
  initialState,
  on(
    SubjectsActions.init,
    (state): State => ({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(
    SubjectsActions.loadSubjectsSuccess,
    (state, { subjects }): State =>
      subjectsAdapter.setAll(subjects, { ...state, loaded: true })
  ),
  on(SubjectsActions.addSubjectSuccess, (state, { payload }) =>
    subjectsAdapter.addOne(payload, state)
  ),
  on(SubjectsActions.updateSubjectSuccess, (state, { id, payload }) =>
    subjectsAdapter.updateOne({ id, changes: payload }, state)
  ),
  on(SubjectsActions.deleteSubjectSuccess, (state, { id }) =>
    subjectsAdapter.removeOne(id, state)
  ),
  on(
    SubjectsActions.loadSubjectsFailure,
    (state, { error }): State => ({
      ...state,
      error,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return subjectsReducer(state, action);
}
