import { EntityBase } from '../api-interfaces';
import { User } from '../auth/user-interface';
import { Subject } from './courses-interface';
import { GenderEnum } from './students-interface';

export interface Teacher extends EntityBase {
  readonly name: string;
  user: User;
  firstName: string;
  middleName: string;
  surname: string;
  secondSurname: string;
  email: string;
  gender: GenderEnum;
  subjects: Subject[];
  birthDate: Date;
}
