import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { SchemaBase } from '../../shared';

export type SchoolDocument = School & Document;

@Schema()
export class School extends SchemaBase {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({ type: String })
  shortName: string;

  @Prop({ type: String })
  logoURL: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  website: string;

  @Prop({ type: String })
  motto: string;

  @Prop({ type: Number, required: true, default: 2022 })
  currentYear: number;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
