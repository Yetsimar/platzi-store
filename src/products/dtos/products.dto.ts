import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger'
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString() // valida q sea un string
  @IsNotEmpty()
  readonly description: string;

  @IsNumber() // valida q sea un numero
  @IsNotEmpty() //valida que no llegue vacio
  @IsPositive() //valida que no llegue numeros negativos
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
//Partial Type significa que va a tomar todas las validacions de CreateProductDto pero opcionales
