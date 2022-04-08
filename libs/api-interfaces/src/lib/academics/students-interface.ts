import { EntityBase } from '../api-interfaces';

export interface Student extends EntityBase {
  firstname: string;
  middleName: string;
  surname: string;
  secondSurname: string;
  email?: string;
  documentId: string;
  gender: GenderEnum;
  birthDate: Date;
  father: Parent;
  mother: Parent;
  nationality: Countries;
}

export interface Parent {
  name: string;
  relation: Relation;
  nationality: Countries;
  phoneNumber: string;
  mobileNumber: string;
  email: string;
  workAddress: string;
  address: string;
}

export enum GenderEnum {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

export enum Relation {
  MOTHER = 'MOTHER',
  FATHER = 'FATHER',
  UNCLE = 'UNCLE',
  AUNT = 'AUNT',
  GRANDFATHER = 'GRANDFATHER',
  GRANDMOTHER = 'GRANDFATHER',
  SISTER = 'SISTER',
  BROTHER = 'BROTHER',
}

export enum Countries {
  PANAMA = 'PANAMA',
  COLOMBIA = 'COLOMBIA',
  VENEZUELA = 'VENEZUELA',
  COSTA_RICA = 'COSTA_RICA',
  USA = 'USA',
  NICARAGUA = 'NICARAGUA',
  MEXICO = 'MEXICO',
  PERU = 'PERU',
  ARGENTINA = 'ARGENTINA',
  ECUADOR = 'ECUADOR',
  HONDURAS = 'HONDURAS',
  GUATEMALA = 'GUATEMALA',
  CANADA = 'CANADA',
  SPAIN = 'SPAIN',
}
