import { EntityBase } from '../api-interfaces';

export interface Course extends EntityBase {
  name: string;
  subject: Subject;
  icon: string;
  color: string;
  weeklyHours: number;
}

export interface Subject extends EntityBase {
  name: string;
  shortName: string;
  code: string;
}
