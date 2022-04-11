import { EntityBase } from '../api-interfaces';
import { Subject } from './subject-interface';

export interface Course extends EntityBase {
  name: string;
  subject: Subject;
  icon: string;
  color: string;
  weeklyHours: number;
}
