import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as Entities from '@skooltrak-project/data/models';
import { PaginationQuery } from '@skooltrak-project/data/models';
import { Model } from 'mongoose';

import { CreateMessageDto } from './dto/create-message.dto';
import { Inbox, InboxDocument } from './schemas/inbox.schema';
import { Message, MessageDocument } from './schemas/message.schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name) private model: Model<MessageDocument>,
    @InjectModel(Inbox.name) private inboxModel: Model<InboxDocument>
  ) {}
  async create(createMessageDto: CreateMessageDto) {
    const created = new this.model(createMessageDto);
    await created.save();
    if (created) {
      const inbox = created.receivers.map((x) => ({
        user: x,
        message: created,
        sender: created.sender,
        subject: created.subject,
      }));
      await this.inboxModel.insertMany(inbox);
      return created.populate('receivers sender');
    }
  }

  findAll() {
    return `This action returns all messages`;
  }

  async inbox(user: Entities.User, pagination?: PaginationQuery) {
    const { currentPage, pageSize } = pagination;
    const query = { user: user._id };

    const findQuery = this.inboxModel
      .find(query)
      .skip(currentPage > 0 ? (currentPage - 1) * pageSize : 0)
      .limit(pageSize)
      .sort({ createdAt: -1 })
      .populate('message sender');

    const items = await findQuery;
    const count = await this.inboxModel.countDocuments(query);
    return { currentPage: +currentPage, pageSize: +pageSize, count, items };
  }

  async sentMessages(user: Entities.User, pagination: PaginationQuery) {
    const { currentPage, pageSize } = pagination;
    const query = { sender: user._id };
    const findQuery = this.model
      .find(query)
      .skip(currentPage > 0 ? (currentPage - 1) * pageSize : 0)
      .limit(pageSize)
      .sort({ createdAt: -1 });
    const items = await findQuery;
    const count = await this.model.countDocuments(query);
    return { currentPage: +currentPage, pageSize: +pageSize, count, items };
  }

  async findOne(id: string) {
    const found = await this.model.findById(id);
    if (!found) {
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
    }
    return found;
  }

  remove = async (id: string) => await this.model.findByIdAndDelete(id);
}
