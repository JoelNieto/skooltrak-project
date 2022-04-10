import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { ToastsEffects } from './+state/toasts.effects';
import { ToastsFacade } from './+state/toasts.facade';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([ToastsEffects])],
  providers: [ToastsFacade],
})
export class SharedToastStoreModule {}
