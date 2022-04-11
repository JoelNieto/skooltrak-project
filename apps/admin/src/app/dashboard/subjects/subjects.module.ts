import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';

@NgModule({
  declarations: [SubjectsComponent],
  imports: [CommonModule, SubjectsRoutingModule],
})
export class SubjectsModule {}
