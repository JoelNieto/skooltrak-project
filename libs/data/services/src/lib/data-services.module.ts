import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { SubjectsService } from './subjects.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SubjectsService
  ],
})
export class DataServicesModule {}
