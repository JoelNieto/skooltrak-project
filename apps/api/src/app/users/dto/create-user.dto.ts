import { ApiProperty } from '@nestjs/swagger';
import { RoleTypeEnum } from '@skooltrak/api-interfaces';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'John' })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ required: true, example: 'Doe' })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ example: 'john.doe@domain.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ required: true, enum: RoleTypeEnum })
  @IsNotEmpty()
  role: RoleTypeEnum;

  @ApiProperty({ required: true, minLength: 8, example: 'abcd1234' })
  @IsNotEmpty()
  password: string;
}
