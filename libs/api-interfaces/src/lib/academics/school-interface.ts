import { EntityBase } from '../api-interfaces';

export interface School extends EntityBase {
  name: string;
  shortName: string;
  logoURL: string;
  address: string;
  website: string;
  motto: string;
  currentYear: number;
}
