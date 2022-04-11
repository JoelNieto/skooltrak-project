import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { ArrayPipe } from './pipes/array.pipe';
import { BooleanPipe } from './pipes/boolean.pipe';
import { ColumnPipe } from './pipes/column.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbDatepickerModule,
  ],
  declarations: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    SelectComponent,
    ArrayPipe,
    ColumnPipe,
    DynamicFormComponent,
    DatepickerComponent,
    BooleanPipe,
    PaginatorComponent,
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    CardComponent,
    SelectComponent,
    ArrayPipe,
    ColumnPipe,
    DynamicFormComponent,
    DatepickerComponent,
    BooleanPipe,
    PaginatorComponent,
  ],
})
export class UiModule {}
