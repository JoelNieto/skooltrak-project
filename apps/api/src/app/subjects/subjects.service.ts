import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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
    return (await created.save()).populate('parent');
  }

  findAll() {
    return this.model.find({}).sort('name').populate('parent');
  }

  async findOne(id: string) {
    const found = await this.model.findById(id);
    if (!found) {
      throw new HttpException('Subject not found', HttpStatus.NOT_FOUND);
    }
    return found;
  }

  async update(id: string, dto: UpdateSubjectDto) {
    const subject = await this.model
      .findByIdAndUpdate(id, {
        $set: {
          name: dto.name,
          shortname: dto.shortname,
          code: dto.code,
          parent: dto.parent,
          updatedAt: new Date(),
        },
      })
      .setOptions({ new: true })
      .populate('parent');
    if (!subject) {
      throw new NotFoundException();
    }
    return subject;
  }

  remove = async (id: string) => await this.model.findByIdAndDelete(id);
}
