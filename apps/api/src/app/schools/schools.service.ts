import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { School, SchoolDocument } from './schemas/school.schema';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectModel(School.name) private model: mongoose.Model<SchoolDocument>
  ) {}

  async create(createSchoolDto: CreateSchoolDto) {
    const createdSchool = new this.model(createSchoolDto);
    return await createdSchool.save();
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}
