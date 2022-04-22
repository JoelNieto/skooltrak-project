import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { MessagesFacade } from '../+state/messages.facade';

@Component({
  selector: 'skooltrak-messaging-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SentComponent implements OnInit {
  messages$ = this.facade.sentMessages$;
  pagination$ = this.facade.sentPagination$;
  count$ = this.facade.sentCount$;
  constructor(private readonly facade: MessagesFacade) {}

  ngOnInit(): void {
    this.facade.loadSentMessages();
  }
}
