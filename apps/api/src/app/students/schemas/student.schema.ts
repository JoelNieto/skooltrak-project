import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Countries, GenderEnum, Relation } from '@skooltrak/api-interfaces';
import * as mongoose from 'mongoose';

export type StudentDocument = Student & mongoose.Document;

@Schema()
export class Parent {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, enum: Relation })
  relation: string;

  @Prop({ type: String, enum: Countries, default: Countries.PANAMA })
  nationality: string;

  @Prop({ type: String })
  mobileNumber: string;

  @Prop({ type: String })
  phoneNumber: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  workAddress: string;

  @Prop({ type: String })
  address: string;
}

const parentSchema = SchemaFactory.createForClass(Parent);

@Schema()
export class Student {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String })
  middleName: string;

  @Prop({ type: String, required: true })
  surname: string;

  @Prop({ type: String })
  secondSurname: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String, required: true })
  documentId: string;

  @Prop({ type: String, enum: GenderEnum, required: true })
  gender: string;

  @Prop({ type: Date, required: true })
  birthDate: Date;

  @Prop({ type: String, enum: Countries, default: Countries.PANAMA })
  nationlity: string;

  @Prop({ type: parentSchema })
  mother: Parent;

  @Prop({ type: parentSchema })
  father: Parent;
}

export const StudentsSchema = SchemaFactory.createForClass(Student);
