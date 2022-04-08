import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'skooltrak-project-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
