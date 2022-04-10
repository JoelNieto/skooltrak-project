import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'skooltrak-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
