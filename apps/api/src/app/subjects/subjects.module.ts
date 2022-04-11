import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Subject, SubjectSchema } from './schemas/subject.schema';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
