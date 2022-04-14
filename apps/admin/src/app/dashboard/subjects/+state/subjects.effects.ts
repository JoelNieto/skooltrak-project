import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SubjectsService } from '@skooltrak-project/data/services';
import { ToastsFacade } from '@skooltrak-project/shared/toast-store';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import * as SubjectsActions from './subjects.actions';

@Injectable()
export class SubjectsEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.init),
      switchMap(() =>
        this.service.getAll().pipe(
          map((subjects) => SubjectsActions.loadSubjectsSuccess({ subjects })),
          catchError((error) =>
            of(SubjectsActions.loadSubjectsFailure({ error }))
          )
        )
      )
    );
  });

  addSubject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.addSubject),
      switchMap(({ subject }) =>
        this.service.post(subject).pipe(
          map((payload) => SubjectsActions.addSubjectSuccess({ payload })),
          catchError((error) =>
            of(SubjectsActions.addSubjectFailure({ error }))
          )
        )
      )
    );
  });

  addSubjectSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.addSubjectSuccess),
      map(({ payload }) =>
        this.toasts$.successToast(
          `Materia ${payload.name} creada exitosamente!`
        )
      )
    );
  });

  updateSubject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.updateSubject),
      switchMap(({ id, subject }) =>
        this.service.update(id, subject).pipe(
          map((payload) =>
            SubjectsActions.updateSubjectSuccess({ id, payload })
          ),
          catchError((error) =>
            of(SubjectsActions.updateSubjectFailure({ error }))
          )
        )
      )
    );
  });

  updateSubjectSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.updateSubjectSuccess),
      map(() => this.toasts$.successToast('Materia actualizada exitosamente!'))
    );
  });

  updateSubjectFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.updateSubjectFailure),
      tap(({ error }) => console.log(error)),
      tap(() => this.toasts$.errorToast('Algo salio mal. Intente nuevamente')),
      map(() => SubjectsActions.init())
    );
  });

  deleteSubject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.deleteSubject),
      switchMap(({ id }) =>
        this.service.delete(id).pipe(
          map(() => SubjectsActions.deleteSubjectSuccess({ id })),
          catchError((error) =>
            of(SubjectsActions.deleteSubjectFailure({ error }))
          )
        )
      )
    );
  });

  deleteSubjectSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.deleteSubjectSuccess),
      map(() => this.toasts$.successToast('Materia eliminada exitosamente!'))
    );
  });

  deleteSubjectFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubjectsActions.deleteSubjectFailure),
      tap(({ error }) => console.log(error)),
      tap(() => this.toasts$.errorToast('Algo salio mal. Intente nuevamente')),
      map(() => SubjectsActions.init())
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly toasts$: ToastsFacade,
    private service: SubjectsService
  ) {}
}
