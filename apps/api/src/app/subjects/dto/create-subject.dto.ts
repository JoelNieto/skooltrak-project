import { ApiProperty } from '@nestjs/swagger';
import { Subject } from '@skooltrak-project/data/models';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSubjectDto
  implements Omit<Subject, '_id' | 'createdAt' | 'updatedAt'>
{
  @ApiProperty({ required: true, example: 'Subject Name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true, example: 'NAME' })
  @IsNotEmpty()
  shortname: string;

  @ApiProperty({ required: false })
  @IsOptional()
  parent?: Subject;

  @ApiProperty({ required: true, example: 'ABCD-100' })
  @IsNotEmpty()
  code: string;
}
