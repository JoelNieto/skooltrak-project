import { EntityBase } from '../api-interfaces';
import { User } from '../auth/user-interface';
import { GenderEnum } from './students-interface';
import { Subject } from './subject-interface';

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
