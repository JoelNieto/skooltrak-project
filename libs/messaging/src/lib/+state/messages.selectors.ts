import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MESSAGES_FEATURE_KEY, State } from './messages.reducer';

// Lookup the 'Messages' feature state managed by NgRx
export const selectMessagesState =
  createFeatureSelector<State>(MESSAGES_FEATURE_KEY);

export const selectInboxState = createSelector(
  selectMessagesState,
  (state: State) => state.inbox
);

export const selectInbox = createSelector(
  selectInboxState,
  (state) => state.messages
);

export const selectInboxPagination = createSelector(
  selectInboxState,
  (state) => state.pagination
);

export const selectInboxCount = createSelector(
  selectInboxState,
  (state) => state.count
);

export const selectMessagesLoaded = createSelector(
  selectMessagesState,
  (state: State) => state.loaded
);

export const selectMessagesError = createSelector(
  selectMessagesState,
  (state: State) => state.error
);

export const selectSentState = createSelector(
  selectMessagesState,
  (state: State) => state.sent
);

export const selectSent = createSelector(
  selectSentState,
  (state) => state.messages
);

export const selectSentPagination = createSelector(
  selectSentState,

  (state) => state.pagination
);

export const selectSentCount = createSelector(
  selectSentState,

  (state) => state.count
);
