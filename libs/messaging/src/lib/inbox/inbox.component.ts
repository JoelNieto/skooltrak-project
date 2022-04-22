import { Component, OnInit } from '@angular/core';

import { MessagesFacade } from '../+state/messages.facade';

@Component({
  selector: 'skooltrak-messaging-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  inbox$ = this.messaging.inbox$;
  pagination$ = this.messaging.pagination$;
  count$ = this.messaging.count$;
  constructor(private messaging: MessagesFacade) {}

  ngOnInit(): void {
    this.messaging.init();
  }

  writeMessage() {
    this.messaging.writeMessage();
  }
}
