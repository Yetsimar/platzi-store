import {
  IsString,
  IsNotEmpty,
  IsEmail
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger'
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firtsname: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  readonly lastname: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ description: 'The email of user' })
  readonly email: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  readonly password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
//Partial Type significa que va a tomar todas las validacions de CreateUserDto pero opcionales
