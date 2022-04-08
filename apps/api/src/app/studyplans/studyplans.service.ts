import { Injectable } from '@nestjs/common';
import { CreateStudyplanDto } from './dto/create-studyplan.dto';
import { UpdateStudyplanDto } from './dto/update-studyplan.dto';

@Injectable()
export class StudyplansService {
  create(createStudyplanDto: CreateStudyplanDto) {
    return 'This action adds a new studyplan';
  }

  findAll() {
    return `This action returns all studyplans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studyplan`;
  }

  update(id: number, updateStudyplanDto: UpdateStudyplanDto) {
    return `This action updates a #${id} studyplan`;
  }

  remove(id: number) {
    return `This action removes a #${id} studyplan`;
  }
}
