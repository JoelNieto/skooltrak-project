import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@skooltrak-project/ui';
import { QuillModule } from 'ngx-quill';

import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessagingComponent } from './messaging/messaging.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMessages from './+state/messages.reducer';
import { MessagesEffects } from './+state/messages.effects';
import { MessagesFacade } from './+state/messages.facade';
import { NgbModalModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MessagingComponent },
    ]),
    UiModule,
    StoreModule.forFeature(
      fromMessages.MESSAGES_FEATURE_KEY,
      fromMessages.reducer
    ),
    NgbNavModule,
    ReactiveFormsModule,
    NgbModalModule,
    EffectsModule.forFeature([MessagesEffects]),
  ],
  declarations: [InboxComponent, ComposeComponent, MessagingComponent],
  providers: [MessagesFacade],
})
export class MessagingModule {}
