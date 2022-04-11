import { EntityBase } from '../api-interfaces';

export interface Subject extends EntityBase {
  name: string;
  shortname: string;
  parent?: Subject;
  code: string;
}
