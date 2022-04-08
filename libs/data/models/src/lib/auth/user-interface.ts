import { EntityBase } from '../api-interfaces';
import { RoleTypeEnum } from './roles-interfaces';

export interface User extends EntityBase {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  role: RoleTypeEnum;
  password: string;
}
