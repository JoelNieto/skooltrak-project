import { EntityBase } from '../api-interfaces';
import { School } from './school-interface';

export interface Curriculum extends EntityBase {
  title: string;
  description?: string;
  degree: string;
  school: School;
}

export interface StudyPlan extends EntityBase {
  title: string;
  description?: string;
  curriculum: Curriculum;
  school: School;
}
