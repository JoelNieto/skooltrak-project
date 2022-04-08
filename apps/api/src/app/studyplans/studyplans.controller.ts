import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudyplansService } from './studyplans.service';
import { CreateStudyplanDto } from './dto/create-studyplan.dto';
import { UpdateStudyplanDto } from './dto/update-studyplan.dto';

@Controller('studyplans')
export class StudyplansController {
  constructor(private readonly studyplansService: StudyplansService) {}

  @Post()
  create(@Body() createStudyplanDto: CreateStudyplanDto) {
    return this.studyplansService.create(createStudyplanDto);
  }

  @Get()
  findAll() {
    return this.studyplansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyplansService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudyplanDto: UpdateStudyplanDto
  ) {
    return this.studyplansService.update(+id, updateStudyplanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyplansService.remove(+id);
  }
}
