import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@skooltrak-project/api-interfaces';
import { AuthFacade } from '@skooltrak-project/auth/store';

@Component({
  selector: 'skooltrak-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient, private auth: AuthFacade) {}
}
