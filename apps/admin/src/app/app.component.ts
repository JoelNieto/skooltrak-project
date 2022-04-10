import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@skooltrak-project/auth/store';
import { RoleGroup } from '@skooltrak-project/data/models';

@Component({
  selector: 'skooltrak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthFacade) {}

  ngOnInit(): void {
    this.auth.init(RoleGroup.ADMIN);
  }
}
