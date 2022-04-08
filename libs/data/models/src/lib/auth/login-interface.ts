import { User } from './user-interface';

export interface Login {
  username: string;
  password: string;
}

export interface Session {
  currentUser: User | undefined;
  accessToken: string | undefined;
  loggedAt?: Date;
}

export interface LoginPayload {
  access_token: string;
}
