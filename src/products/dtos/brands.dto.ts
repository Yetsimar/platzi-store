import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger'
export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
//Partial Type significa que va a tomar todas las validacions de CreateBrandDto pero opcionales
