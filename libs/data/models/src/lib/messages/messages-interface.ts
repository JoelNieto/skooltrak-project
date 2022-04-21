import { PayloadUser } from '../auth';

export interface Message {
  _id: string;
  subject: string;
  content: string;
  sender: PayloadUser;
  receivers: PayloadUser[];
  createdAt: Date;
}

export type SendMessage = Omit<Message, '_id' | 'sender' | 'createdAt'>;
