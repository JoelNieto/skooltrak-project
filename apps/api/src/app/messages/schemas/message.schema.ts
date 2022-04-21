import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Entities from '@skooltrak-project/data/models';
import * as mongoose from 'mongoose';

import { User } from '../../users/schemas/user.schema';

export type MessageDocument = Message & mongoose.Document;

@Schema()
export class Message
  implements Omit<Entities.Message, '_id' | 'sender' | 'receivers'>
{
  @Prop({ type: String, required: true })
  subject: string;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: User;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  receivers: User[];

  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date | undefined;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
