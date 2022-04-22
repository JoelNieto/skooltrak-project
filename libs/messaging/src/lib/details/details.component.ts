import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skooltrak-project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
