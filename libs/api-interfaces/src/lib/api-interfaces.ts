import { Prop } from '@nestjs/mongoose';

export interface Message {
  message: string;
}

export interface EntityBase {
  _id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class SchemaBase {
  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date | undefined;

  @Prop({ type: Date, required: true, default: Date.now })
  updatedAt: Date | undefined;
}
