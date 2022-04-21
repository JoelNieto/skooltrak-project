import { ApiProperty } from '@nestjs/swagger';
import { Message, PayloadUser } from '@skooltrak-project/data/models';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateMessageDto implements Omit<Message, '_id' | 'createdAt'> {
  @ApiProperty({ required: true, example: 'Messages subjects' })
  @IsNotEmpty()
  subject: string;

  @ApiProperty({ required: true, example: 'Messages content' })
  @IsNotEmpty()
  content: string;

  sender: PayloadUser;

  @ApiProperty({ required: true, isArray: true })
  @IsArray()
  receivers: PayloadUser[];
}
