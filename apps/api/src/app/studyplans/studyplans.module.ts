import { Module } from '@nestjs/common';
import { StudyplansService } from './studyplans.service';
import { StudyplansController } from './studyplans.controller';

@Module({
  controllers: [StudyplansController],
  providers: [StudyplansService],
})
export class StudyplansModule {}
