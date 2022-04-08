import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { SchoolsModule } from './schools/schools.module';
import { StudyplansModule } from './studyplans/studyplans.module';
import { GroupsModule } from './groups/groups.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { CurriculumModule } from './curriculum/curriculum.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongodbUri),
    AuthModule,
    UsersModule,
    StudentsModule,
    SchoolsModule,
    StudyplansModule,
    GroupsModule,
    SubjectsModule,
    TeachersModule,
    CurriculumModule,
  ],
})
export class AppModule {}
