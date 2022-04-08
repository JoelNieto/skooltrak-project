import { PartialType } from '@nestjs/swagger';
import { CreateStudyplanDto } from './create-studyplan.dto';

export class UpdateStudyplanDto extends PartialType(CreateStudyplanDto) {}
