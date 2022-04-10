import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LoginPayload, PayloadUser, RoleGroup } from '@skooltrak-project/data/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login = (login: Login, role: RoleGroup = RoleGroup.ADMIN) =>
    this.http.post<LoginPayload>('/api/auth/login', { ...login, role });

  public profile = () => this.http.get<PayloadUser>('/api/auth/profile');
}
