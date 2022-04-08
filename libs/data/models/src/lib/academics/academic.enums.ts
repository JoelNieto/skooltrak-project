export class DegreesEnum {
  public static PRESCHOOL: DegreesEnum = new DegreesEnum('PreSchool', 0, true);
  public static ELEMENTARY: DegreesEnum = new DegreesEnum('Elementary', 1);
  public static MIDDLESCHOOL: DegreesEnum = new DegreesEnum('Middle School', 2);
  public static HIGHSCHOOL: DegreesEnum = new DegreesEnum('High School', 3);

  public static DEGREES: DegreesEnum[] = [
    DegreesEnum.PRESCHOOL,
    DegreesEnum.ELEMENTARY,
    DegreesEnum.MIDDLESCHOOL,
    DegreesEnum.HIGHSCHOOL,
  ];

  constructor(
    public name: string,
    public order: number,
    public isPreSchool = false
  ) {}
}

export class LevelsEnum {
  public static PREKINDER = new LevelsEnum(
    'Pre Kinder',
    -1,
    DegreesEnum.PRESCHOOL
  );
  public static KINDER = new LevelsEnum('Kinder', 0, DegreesEnum.PRESCHOOL);
  public static FIRSTGRADE = new LevelsEnum(
    'First Grade',
    1,
    DegreesEnum.ELEMENTARY
  );
  public static SECONDGRADE = new LevelsEnum(
    'Second Grade',
    2,
    DegreesEnum.ELEMENTARY
  );
  public static THIRDGRADE = new LevelsEnum(
    'Third Grade',
    3,
    DegreesEnum.ELEMENTARY
  );
  public static FOURTHGRADE = new LevelsEnum(
    'Fourth Grade',
    4,
    DegreesEnum.ELEMENTARY
  );
  public static FIFTHGRADE = new LevelsEnum(
    'Fifth Grade',
    5,
    DegreesEnum.ELEMENTARY
  );
  public static SIXTGRADE = new LevelsEnum(
    'Sixt Grade',
    6,
    DegreesEnum.ELEMENTARY
  );
  public static SEVENTHGRADE = new LevelsEnum(
    'Seventh Grade',
    7,
    DegreesEnum.MIDDLESCHOOL
  );
  public static EIGHTHGRADE = new LevelsEnum(
    'Eighth Grade',
    8,
    DegreesEnum.MIDDLESCHOOL
  );
  public static NINTHGRADE = new LevelsEnum(
    'Ninth Grade',
    9,
    DegreesEnum.MIDDLESCHOOL
  );
  public static TENTHGRADE = new LevelsEnum(
    'Tenth Grade',
    10,
    DegreesEnum.HIGHSCHOOL
  );
  public static ELEVENTHGRADE = new LevelsEnum(
    'Eleventh Grade',
    11,
    DegreesEnum.HIGHSCHOOL
  );
  public static TWELFTHGRADE = new LevelsEnum(
    'Twelfth Grade',
    12,
    DegreesEnum.HIGHSCHOOL
  );

  public static LEVELS: LevelsEnum[] = [
    LevelsEnum.PREKINDER,
    LevelsEnum.KINDER,
    LevelsEnum.FIRSTGRADE,
    LevelsEnum.SECONDGRADE,
    LevelsEnum.THIRDGRADE,
    LevelsEnum.FOURTHGRADE,
    LevelsEnum.FIFTHGRADE,
    LevelsEnum.SIXTGRADE,
    LevelsEnum.SEVENTHGRADE,
    LevelsEnum.EIGHTHGRADE,
    LevelsEnum.NINTHGRADE,
    LevelsEnum.TENTHGRADE,
    LevelsEnum.ELEVENTHGRADE,
    LevelsEnum.TWELFTHGRADE,
  ];

  constructor(
    public name: string,
    public order: number,
    public degree: DegreesEnum
  ) {}
}
