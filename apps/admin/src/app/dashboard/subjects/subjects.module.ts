import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '@skooltrak-project/ui';

import { SubjectsEffects } from './+state/subjects.effects';
import { SubjectsFacade } from './+state/subjects.facade';
import * as fromSubjects from './+state/subjects.reducer';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    StoreModule.forFeature(
      fromSubjects.SUBJECTS_FEATURE_KEY,
      fromSubjects.reducer
    ),
    EffectsModule.forFeature([SubjectsEffects]),
    UiModule,
  ],
  providers: [SubjectsFacade],
})
export class SubjectsModule {}
