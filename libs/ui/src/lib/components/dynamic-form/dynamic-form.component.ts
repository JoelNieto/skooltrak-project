/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { sortBy } from 'lodash';

import { Column } from '../../interfaces/column';
import { RegexEnum } from '../../interfaces/regex.enum';
import { UtilService } from '../../util.service';

@Component({
  selector: 'skooltrak-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() fields!: Column[];
  @Input() item: any = {};
  form: FormGroup = new FormGroup({});
  constructor(
    public readonly modal: NgbActiveModal,
    private readonly util: UtilService
  ) {}

  ngOnInit(): void {
    this.resolveLists();
    this.generateForm();
  }

  generateForm(): void {
    this.fields
      .filter((x) => !x.readonly)
      .forEach((field) => {
        const control = new FormControl(this.item[field.name]);
        const validators: ValidatorFn[] = [];

        if (field.required) {
          validators.push(Validators.required);
        }

        if (field.type === 'email') {
          validators.push(Validators.pattern(RegexEnum.EMAIL));
        }

        if (field.type === 'mobile-phone') {
          validators.push(Validators.pattern(RegexEnum.MOBILE_PHONE));
        }

        if (field.type === 'home-phone') {
          validators.push(Validators.pattern(RegexEnum.HOME_PHONE));
        }

        if (validators.length) {
          control.setValidators(validators);
        }
        this.form.addControl(field.name, control);
      });
  }

  updateObject(event: any): void {
    this.fields
      .filter((x) => !x.readonly)
      .forEach((field) => {
        if (field.type === 'object' && this.item[field.objectID!]) {
          this.item[field.name] = this.util.filterByProperty(
            field.list!,
            this.item[field.objectID!]
          );
          this.item[field.objectText!] =
            this.item[field.name][field.listDisplay];
        } else {
          this.item[field.name] = this.form.get(field.name)?.value;
        }
      });
  }

  resolveLists(): void {
    this.fields
      .filter((x) => !x.readonly && x.asyncList)
      .forEach((field) => {
        field.asyncList?.subscribe({
          next: (data) => {
            field.list = field.listDisplay
              ? sortBy(data, field.listDisplay)
              : sortBy(data, 'name');
          },
          error: (err) => {
            console.error(err);
          },
        });
      });
  }

  validateForm(): void {
    if (this.form.valid) {
      this.modal.close();
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
