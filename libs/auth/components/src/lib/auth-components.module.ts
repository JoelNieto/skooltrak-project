import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginPage } from './login/login.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    ReactiveFormsModule,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthComponentsModule {}
