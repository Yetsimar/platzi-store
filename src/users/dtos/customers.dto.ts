import {
  IsString,
  IsNotEmpty
} from 'class-validator';
import { PartialType } from '@nestjs/swagger'
export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly firtsname: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  readonly lastname: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
//Partial Type significa que va a tomar todas las validacions de CreateCustomerDto pero opcionales
