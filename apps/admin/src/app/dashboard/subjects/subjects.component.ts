import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from '@skooltrak-project/data/models';
import { TableOptions } from '@skooltrak-project/ui';

import { SubjectsFacade } from './+state/subjects.facade';

@Component({
  selector: 'skooltrak-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectsComponent implements OnInit {
  subjects$ = this.facade.allSubjects$;
  public table = new TableOptions();
  constructor(private readonly facade: SubjectsFacade) {}

  ngOnInit(): void {
    this.table.lookup = true;
    this.table.columns = [
      { name: 'name', title: 'Nombre', required: true, filterable: true },
      {
        name: 'shortname',
        title: 'Nombre corto',
        required: true,
        filterable: true,
      },
      { name: 'code', title: 'Codigo', required: true, filterable: true },
      {
        name: 'parent',
        title: 'Padre',
        type: 'object',
        objectText: 'name',
        asyncList: this.subjects$,
        lookup: true,
      },
      { name: 'createdAt', title: 'Creado', type: 'datetime', readonly: true },
      {
        name: 'updatedAt',
        title: 'Actualizado',
        type: 'datetime',
        readonly: true,
      },
    ];
    this.facade.init();
  }

  addSubject(subject: Subject) {
    this.facade.addSubject(subject);
  }

  editSubject(subject: Subject) {
    this.facade.editSubject(subject._id, subject);
  }

  deleteSubject(id: string) {
    console.log('id', id);
    this.facade.deleteSubject(id);
  }
}
