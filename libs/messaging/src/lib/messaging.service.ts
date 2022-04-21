import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Message,
  PaginatedInbox,
  PayloadUser,
  SendMessage,
} from '@skooltrak-project/data/models';
import { first, switchMap } from 'rxjs';
import * as selectors from './+state/messages.selectors';
@Injectable({ providedIn: 'root' })
export class MessagingService {
  constructor(private http: HttpClient, private readonly store: Store) {}

  public inbox = () =>
    this.store.select(selectors.selectPagination).pipe(
      first(),
      switchMap(({ pageSize, currentPage }) =>
        this.http.get<PaginatedInbox>('/api/messages/inbox', {
          params: { pageSize, currentPage },
        })
      )
    );

  public sendMessage = (request: SendMessage) =>
    this.http.post<Message>('/api/messages/', request);

  public getContacts = () => this.http.get<PayloadUser[]>('/api/users');
}
