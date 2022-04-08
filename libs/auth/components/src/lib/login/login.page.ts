import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@skooltrak-project/auth/store';
import { RoleGroup } from '@skooltrak-project/data/models';

@Component({
  selector: 'skooltrak-project-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  constructor(private auth: AuthFacade) {}

  ngOnInit(): void {
    this.auth.init(RoleGroup.ADMIN);
  }
}
