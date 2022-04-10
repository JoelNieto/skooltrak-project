import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'skooltrak-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
