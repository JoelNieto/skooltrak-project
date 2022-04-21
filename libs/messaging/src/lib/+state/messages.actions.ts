import { createAction, props } from '@ngrx/store';
import {
  Message,
  PaginatedInbox,
  SendMessage,
} from '@skooltrak-project/data/models';

export const init = createAction('[Messages Page] Init');

export const loadMessagesSuccess = createAction(
  '[Messages/API] Load Messages Success',
  props<{ payload: PaginatedInbox }>()
);

export const loadMessagesFailure = createAction(
  '[Messages/API] Load Messages Failure',
  props<{ error: any }>()
);

export const writeMessage = createAction('[Messages/API] Write New Message');

export const sendNewMessage = createAction(
  '[Messages/API] Send New Message',
  props<{ message: SendMessage }>()
);

export const sendNewMessageSuccess = createAction(
  '[Messages/API] Send New Message Success',
  props<{ message: Message }>()
);

export const sendNewMessageFailure = createAction(
  '[Messages/API] Send New Message Failure',
  props<{ error: any }>()
);
