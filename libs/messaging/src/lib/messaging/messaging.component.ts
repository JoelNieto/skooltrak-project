import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'skooltrak-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagingComponent {
  constructor(private readonly modal: NgbModal) {}

  writeMessage = () => this.modal.open(ComposeComponent);
}
