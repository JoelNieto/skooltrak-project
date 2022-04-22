import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastsFacade } from '@skooltrak-project/shared/toast-store';
import { catchError, map, of, switchMap } from 'rxjs';

import { ComposeComponent } from '../compose/compose.component';
import { MessagingService } from '../messaging.service';
import * as MessagesActions from './messages.actions';

@Injectable()
export class MessagesEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.init),
      switchMap(() =>
        this.service.inbox().pipe(
          map((payload) => MessagesActions.loadMessagesSuccess({ payload })),
          catchError((error) => of(MessagesActions.loadMessagesFailure(error)))
        )
      )
    );
  });

  writeMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(MessagesActions.writeMessage),
        map(() =>
          this.modal.open(ComposeComponent, { size: 'lg', backdrop: 'static' })
        )
      );
    },
    { dispatch: false }
  );

  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.sendNewMessage),
      switchMap(({ message }) =>
        this.service
          .sendMessage(message)
          .pipe(
            map((message) => MessagesActions.sendNewMessageSuccess({ message }))
          )
      )
    );
  });

  sendMessageSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.sendNewMessageSuccess),
      map(() => this.toasts.successToast('Mensaje enviado exitosamente'))
    );
  });

  loadSent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MessagesActions.loadSentMessages),
      switchMap(() =>
        this.service.sentMessages().pipe(
          map((payload) =>
            MessagesActions.loadSentMessagesSuccess({ payload })
          ),
          catchError((error) =>
            of(MessagesActions.loadSentMessagesFailure(error))
          )
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly service: MessagingService,
    private readonly modal: NgbModal,
    private readonly toasts: ToastsFacade
  ) {}
}
