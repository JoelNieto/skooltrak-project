import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoleTypeEnum, SchemaBase } from '@skooltrak-project/api-interfaces';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends SchemaBase {
  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true, enum: RoleTypeEnum })
  role: string;

  @Prop({ type: String })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
