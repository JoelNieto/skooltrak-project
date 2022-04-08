import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthStoreModule } from '@skooltrak-project/auth/store';

import { LoginPage } from './login/login.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    AuthStoreModule,
  ],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthComponentsModule {}
