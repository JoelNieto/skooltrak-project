import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePage } from './home/home.page';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [HomePage, DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
