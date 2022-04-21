import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '@skooltrak-project/auth/components';

import { DashboardComponent } from './dashboard.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomePage },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'messages',
        loadChildren: () =>
          import('@skooltrak-project/messaging').then((m) => m.MessagingModule),
      },
      {
        path: 'studyplans',
        loadChildren: () =>
          import('./studyplans/studyplans.module').then(
            (m) => m.StudyplansModule
          ),
      },
      {
        path: 'schools',
        loadChildren: () =>
          import('./schools/schools.module').then((m) => m.SchoolsModule),
      },
      {
        path: 'subjects',
        loadChildren: () =>
          import('./subjects/subjects.module').then((m) => m.SubjectsModule),
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
