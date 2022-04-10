import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    TableComponent,
    CardComponent
  ],
  exports: [
    ButtonComponent,
    TableComponent,
    CardComponent
  ],
})
export class UiModule {}
