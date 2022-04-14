import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudyplansComponent } from './studyplans.component';

const routes: Routes = [{ path: '', component: StudyplansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyplansRoutingModule {}
