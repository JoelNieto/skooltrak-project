import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty({ required: true, example: 'School name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'School name' })
  @IsOptional()
  shortName: string;

  @ApiProperty({ required: false, example: 'https://logo.jpg' })
  @IsOptional()
  logoURL: string;

  @ApiProperty({ example: 'Panama City' })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'https://skooltrak.com' })
  @IsOptional()
  website: string;

  @ApiProperty({ example: 'Schools motto' })
  @IsOptional()
  motto: string;

  @ApiProperty({ example: 2022 })
  @IsNotEmpty()
  currentYear: number;
}
