import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject, SubjectDocument } from './schemas/subject.schema';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject.name) private model: Model<SubjectDocument>
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const created = new this.model(createSubjectDto);
    return await created.save();
  }

  findAll() {
    return this.model.find({}).sort('name');
  }

  async findOne(id: string) {
    const found = await this.model.findById(id);
    if (!found) {
      throw new HttpException('Subject not found', HttpStatus.NOT_FOUND);
    }
    return found;
  }

  update(id: string, dto: UpdateSubjectDto) {
    this.model
      .findByIdAndUpdate(id, {
        $set: {
          name: dto.name,
          shortname: dto.shortname,
          code: dto.code,
          parent: dto.parent,
          updatedAt: new Date(),
        },
      })
      .exec();
  }

  remove = (id: string) => this.model.findByIdAndDelete(id).exec();
}
