import { ApiProperty } from '@nestjs/swagger';
import { RoleGroup } from '@skooltrak-project/data/models';
import { IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @ApiProperty({
    example: '8-888-8884',
    description: 'User email or document ID',
    required: true,
  })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'abcd1234', required: true, minLength: 8 })
  password: string;

  @IsNotEmpty()
  @ApiProperty({ enum: RoleGroup, default: RoleGroup.ADMIN })
  role: RoleGroup;
}
