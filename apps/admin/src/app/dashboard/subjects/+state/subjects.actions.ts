import { createAction, props } from '@ngrx/store';
import { Subject } from '@skooltrak-project/data/models';

export const init = createAction('[Subjects Page] Init');

export const loadSubjectsSuccess = createAction(
  '[Subjects/API] Load Subjects Success',
  props<{ subjects: Subject[] }>()
);

export const loadSubjectsFailure = createAction(
  '[Subjects/API] Load Subjects Failure',
  props<{ error: unknown }>()
);

export const addSubject = createAction(
  '[Subjects/API] Add Subject',
  props<{ subject: Subject }>()
);

export const addSubjectSuccess = createAction(
  '[Subjects/API] Add Subject Success',
  props<{ payload: Subject }>()
);

export const addSubjectFailure = createAction(
  '[Subjects/API] Add Subject Success',
  props<{ error: unknown }>()
);

export const updateSubject = createAction(
  '[Subjects/API] Update Subject',
  props<{ id: string; subject: Subject }>()
);

export const updateSubjectSuccess = createAction(
  '[Subjects/API] Update Subject Success',
  props<{ id: string; payload: Subject }>()
);

export const updateSubjectFailure = createAction(
  '[Subjects/API] Update Subject Failure',
  props<{ error: unknown }>()
);
export const deleteSubject = createAction(
  '[Subjects/API] Delete Subject',
  props<{ id: string }>()
);

export const deleteSubjectSuccess = createAction(
  '[Subjects/API] Delete Subject Success',
  props<{ id: string }>()
);

export const deleteSubjectFailure = createAction(
  '[Subjects/API] Delete Subject Failure',
  props<{ error: unknown }>()
);
