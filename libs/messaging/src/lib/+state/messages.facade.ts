import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SendMessage } from '@skooltrak-project/data/models';
import { MessagingService } from '../messaging.service';

import * as MessagesActions from './messages.actions';
import * as MessagesSelectors from './messages.selectors';

@Injectable()
export class MessagesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.select(MessagesSelectors.selectMessagesLoaded);
  inbox$ = this.store.select(MessagesSelectors.selectInbox);
  pagination$ = this.store.select(MessagesSelectors.selectPagination);
  count$ = this.store.select(MessagesSelectors.selectInboxCount);
  contacts$ = this.service.getContacts();
  constructor(
    private readonly store: Store,
    private readonly service: MessagingService
  ) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(MessagesActions.init());
  }

  writeMessage() {
    this.store.dispatch(MessagesActions.writeMessage());
  }

  sendMessage(message: SendMessage) {
    this.store.dispatch(MessagesActions.sendNewMessage({ message }));
  }
}
