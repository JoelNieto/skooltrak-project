import { Prop } from '@nestjs/mongoose';

export class SchemaBase {
  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date | undefined;

  @Prop({ type: Date, required: true, default: Date.now })
  updatedAt: Date | undefined;
}
