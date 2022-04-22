import { Action, createReducer, on } from '@ngrx/store';
import { Inbox, Message, PaginationQuery } from '@skooltrak-project/data/models';

import * as MessagesActions from './messages.actions';

export const MESSAGES_FEATURE_KEY = 'messages';

export interface State {
  inbox: {
    messages: Inbox[] | undefined;
    pagination: PaginationQuery;
    count: number;
  };
  sent: {
    messages: Message[] | undefined;
    pagination: PaginationQuery;
    count: number;
  };
  currentMessage: Message | undefined;
  loaded: boolean; // has the Messages list been loaded
  error?: string | null; // last known error (if any)
}

export interface MessagesPartialState {
  readonly [MESSAGES_FEATURE_KEY]: State;
}

export const initialState: State = {
  inbox: {
    messages: undefined,
    pagination: { currentPage: 1, pageSize: 10 },
    count: 0,
  },
  sent: {
    messages: undefined,
    pagination: { currentPage: 1, pageSize: 10 },
    count: 0,
  },
  currentMessage: undefined,
  loaded: false,
};

const messagesReducer = createReducer(
  initialState,
  on(
    MessagesActions.init,
    (state): State => ({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(
    MessagesActions.loadMessagesFailure,
    (state, { error }): State => ({
      ...state,
      error,
    })
  ),
  on(
    MessagesActions.loadMessagesSuccess,
    (state, { payload }): State => ({
      ...state,
      loaded: true,
      inbox: { ...state.inbox, messages: payload.items, count: payload.count },
    })
  ),
  on(
    MessagesActions.loadSentMessagesSuccess,
    (state, { payload }): State => ({
      ...state,
      loaded: true,
      sent: { ...state.sent, messages: payload.items, count: payload.count },
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return messagesReducer(state, action);
}
