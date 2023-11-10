import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger'
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
//Partial Type significa que va a tomar todas las validacions de CreateCategoryDto pero opcionales
