import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skooltrak-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
