import { PaginatedData } from '../api-interfaces';
import { PayloadUser } from '../auth';
import { Message } from './messages-interface';

export enum InboxStatus {
  UNREAD = 'UNREAD',
  READ = 'READ',
  TRASH = 'TRASH',
}

export interface Inbox {
  user: PayloadUser;
  message: Message;
  sender: PayloadUser;
  subject: string;
  status: InboxStatus;
  createdAt: Date;
  readAt: Date | undefined;
}

export type PaginatedInbox = PaginatedData<Inbox>;
