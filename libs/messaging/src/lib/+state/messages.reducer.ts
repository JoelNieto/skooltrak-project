import { Action, createReducer, on } from '@ngrx/store';
import {
  Inbox,
  Message,
  PaginationQuery,
} from '@skooltrak-project/data/models';

import * as MessagesActions from './messages.actions';

export const MESSAGES_FEATURE_KEY = 'messages';

export interface State {
  inbox: Inbox[] | undefined;
  count: number;
  pagination: PaginationQuery;
  currentMessage: Message | undefined;
  loaded: boolean; // has the Messages list been loaded
  error?: string | null; // last known error (if any)
}

export interface MessagesPartialState {
  readonly [MESSAGES_FEATURE_KEY]: State;
}

export const initialState: State = {
  inbox: undefined,
  count: 0,
  pagination: { currentPage: 1, pageSize: 5 },
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
      inbox: payload.items,
      count: payload.count,
    })
  )
);

export function reducer(state: State | undefined, action: Action) {
  return messagesReducer(state, action);
}
