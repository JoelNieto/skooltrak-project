import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiModule } from '@skooltrak-project/ui';

import { LoginPage } from './login/login.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    ReactiveFormsModule,
    FormsModule,
    UiModule,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthComponentsModule {}
