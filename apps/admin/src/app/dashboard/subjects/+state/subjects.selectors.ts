import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, SUBJECTS_FEATURE_KEY, subjectsAdapter } from './subjects.reducer';

// Lookup the 'Subjects' feature state managed by NgRx
export const selectSubjectsState =
  createFeatureSelector<State>(SUBJECTS_FEATURE_KEY);

const { selectAll, selectEntities } = subjectsAdapter.getSelectors();

export const selectSubjectsLoaded = createSelector(
  selectSubjectsState,
  (state: State) => state.loaded
);

export const selectSubjectsError = createSelector(
  selectSubjectsState,
  (state: State) => state.error
);

export const selectAllSubjects = createSelector(
  selectSubjectsState,
  (state: State) => selectAll(state)
);

export const selectSubjectsEntities = createSelector(
  selectSubjectsState,
  (state: State) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectSubjectsState,
  (state: State) => state.selectedId
);

export const selectSelected = createSelector(
  selectSubjectsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
