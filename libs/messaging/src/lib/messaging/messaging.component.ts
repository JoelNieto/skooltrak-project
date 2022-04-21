import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComposeComponent } from '../compose/compose.component';

@Component({
  selector: 'skooltrak-project-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagingComponent {
  constructor(private readonly modal: NgbModal) {}

  writeMessage = () => this.modal.open(ComposeComponent);
}
