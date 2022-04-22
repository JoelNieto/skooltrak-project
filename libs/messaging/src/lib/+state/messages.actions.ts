import { createAction, props } from '@ngrx/store';
import { Inbox, Message, PaginatedInbox, PaginatedMessages, SendMessage } from '@skooltrak-project/data/models';

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

export const loadSentMessages = createAction(
  '[Messages/API] Load Sent Messages'
);
export const loadSentMessagesSuccess = createAction(
  '[Messages/API] Load Sent Messages Success',
  props<{ payload: PaginatedMessages }>()
);
export const loadSentMessagesFailure = createAction(
  '[Messages/API] Load Sent Messages Failure',
  props<{ error: any }>()
);

export const readInboxMessage = createAction(
  '[Messages/API] Read Inbox Message',
  props<{ request: Inbox }>()
);

export const loadMessage = createAction(
  '[Messages/API] LoadMessage',
  props<{ id: string }>()
);
