import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from '@skooltrak-project/data/models';

import * as SubjectsActions from './subjects.actions';
import * as SubjectsSelectors from './subjects.selectors';

@Injectable()
export class SubjectsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.select(SubjectsSelectors.selectSubjectsLoaded);
  allSubjects$ = this.store.select(SubjectsSelectors.selectAllSubjects);
  selectedSubjects$ = this.store.select(SubjectsSelectors.selectSelected);

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SubjectsActions.init());
  }

  addSubject = (subject: Subject) =>
    this.store.dispatch(SubjectsActions.addSubject({ subject }));

  editSubject = (id: string, subject: Subject) =>
    this.store.dispatch(SubjectsActions.updateSubject({ id, subject }));

  deleteSubject = (id: string) =>
    this.store.dispatch(SubjectsActions.deleteSubject({ id }));
}
