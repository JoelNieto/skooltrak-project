import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@skooltrak-project/auth/store';

@Component({
  selector: 'skooltrak-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  userName$ = this.auth.userName$;

  constructor(private readonly auth: AuthFacade) {}

  ngOnInit(): void {
    this.auth.loadProfile();
  }
}
