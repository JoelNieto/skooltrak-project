import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyplansRoutingModule } from './studyplans-routing.module';
import { StudyplansComponent } from './studyplans.component';


@NgModule({
  declarations: [
    StudyplansComponent
  ],
  imports: [
    CommonModule,
    StudyplansRoutingModule
  ]
})
export class StudyplansModule { }
