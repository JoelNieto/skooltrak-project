import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import * as Entities from '@skooltrak-project/data/models';
import { PaginationQuery } from '@skooltrak-project/data/models';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '../decorators/user.decorator';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@ApiTags('messages')
@ApiBearerAuth()
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createMessageDto: CreateMessageDto,
    @User() user: Entities.User
  ) {
    createMessageDto.sender = user;
    return this.messagesService.create(createMessageDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'pageSize', enum: [5, 10, 15, 20], required: true })
  @ApiQuery({ name: 'currentPage', required: true })
  @Get('inbox')
  getInbox(@User() user: Entities.User, @Query() pagination: PaginationQuery) {
    return this.messagesService.inbox(user, pagination);
  }

  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'pageSize', enum: [5, 10, 15, 20], required: true })
  @ApiQuery({ name: 'currentPage', required: true })
  @Get('sent')
  getSend(@User() user: Entities.User, @Query() pagination: PaginationQuery) {
    return this.messagesService.sentMessages(user, pagination);
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(id);
  }
}
