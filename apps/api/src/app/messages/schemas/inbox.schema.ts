import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Entities from '@skooltrak-project/data/models';
import * as mongoose from 'mongoose';

import { User } from '../../users/schemas/user.schema';
import { Message } from './message.schema';

export type InboxDocument = Inbox & mongoose.Document;

@Schema()
export class Inbox
  implements Omit<Entities.Inbox, 'user' | 'sender' | 'message'>
{
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    required: true,
  })
  message: Message;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  sender: Entities.User;

  @Prop({ type: String, required: true })
  subject: string;

  @Prop({ type: String, default: Entities.InboxStatus.UNREAD })
  status: Entities.InboxStatus;

  @Prop({ type: Date, default: Date.now, required: true })
  createdAt: Date;

  @Prop({ type: Date })
  readAt: Date;
}

export const InboxSchema = SchemaFactory.createForClass(Inbox);
