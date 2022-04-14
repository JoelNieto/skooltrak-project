import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skooltrak-studyplans',
  templateUrl: './studyplans.component.html',
  styleUrls: ['./studyplans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudyplansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
