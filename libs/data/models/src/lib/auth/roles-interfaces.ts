export enum RoleGroup {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
}

export enum RoleTypeEnum {
  ADMINISTRATOR = 'ADMINISTRATOR',
  ACADEMIC_ADMIN = 'ACADEMIC_ADMIN',
  COLLECTION = 'COLLECTION',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
}

export class RoleType {
  public static ADMINISTRATOR: RoleType = new RoleType(
    'ADMINISTRATOR',
    RoleGroup.ADMIN
  );
  public static ACADEMIC_ADMIN: RoleType = new RoleType(
    'ACADEMIC_ADMIN',
    RoleGroup.ADMIN
  );
  public static COLLECTION: RoleType = new RoleType(
    'COLLECTION',
    RoleGroup.ADMIN
  );
  public static TEACHER: RoleType = new RoleType('TEACHER', RoleGroup.TEACHER);
  public static STUDENT: RoleType = new RoleType('STUDENT', RoleGroup.STUDENT);
  public static PARENT: RoleType = new RoleType('PARENT', RoleGroup.STUDENT);

  public static ROLES: RoleType[] = [
    RoleType.ADMINISTRATOR,
    RoleType.ACADEMIC_ADMIN,
    RoleType.COLLECTION,
    RoleType.TEACHER,
    RoleType.STUDENT,
    RoleType.PARENT,
  ];

  constructor(public name: string, public group: RoleGroup) {}
}
