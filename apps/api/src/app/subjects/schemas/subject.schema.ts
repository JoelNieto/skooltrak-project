import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Entities from '@skooltrak-project/data/models';
import * as mongoose from 'mongoose';

import { SchemaBase } from '../../shared';

export type SubjectDocument = Subject & mongoose.Document;
@Schema()
export class Subject
  extends SchemaBase
  implements Omit<Entities.Subject, '_id'>
{
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  shortname: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Subject' })
  parent?: Entities.Subject;

  @Prop({ type: String, required: false, unique: true })
  code: string;
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
