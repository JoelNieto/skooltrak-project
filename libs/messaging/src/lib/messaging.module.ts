import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '@skooltrak-project/ui';
import { QuillModule } from 'ngx-quill';

import { MessagesEffects } from './+state/messages.effects';
import { MessagesFacade } from './+state/messages.facade';
import * as fromMessages from './+state/messages.reducer';
import { ComposeComponent } from './compose/compose.component';
import { DetailsComponent } from './details/details.component';
import { InboxComponent } from './inbox/inbox.component';
import { MessagingComponent } from './messaging/messaging.component';
import { SentComponent } from './sent/sent.component';

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
  declarations: [
    InboxComponent,
    ComposeComponent,
    MessagingComponent,
    SentComponent,
    DetailsComponent,
  ],
  providers: [MessagesFacade],
})
export class MessagingModule {}
