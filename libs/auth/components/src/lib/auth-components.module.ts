import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginPage],
  exports: [LoginPage],
})
export class AuthComponentsModule {}
