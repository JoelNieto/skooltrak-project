import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MESSAGES_FEATURE_KEY, State } from './messages.reducer';

// Lookup the 'Messages' feature state managed by NgRx
export const selectMessagesState =
  createFeatureSelector<State>(MESSAGES_FEATURE_KEY);

export const selectPagination = createSelector(
  selectMessagesState,
  (state: State) => state.pagination
);

export const selectInbox = createSelector(
  selectMessagesState,
  (state: State) => state.inbox
);

export const selectInboxCount = createSelector(
  selectMessagesState,
  (state: State) => state.count
);

export const selectMessagesLoaded = createSelector(
  selectMessagesState,
  (state: State) => state.loaded
);

export const selectMessagesError = createSelector(
  selectMessagesState,
  (state: State) => state.error
);
