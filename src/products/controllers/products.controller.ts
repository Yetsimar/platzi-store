import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Put,
  Body,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe
} from '@nestjs/common';
// import { Response } from 'express';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe'
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto'
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products'})
  find(
    @Query('limit') limit: 100,
    @Query('offset') offset: 0,
    @Query('brand') brand: string,
  ) {
    // return `Product ${limit},${offset},${brand}`;
    return this.productsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id', ParseIntPipe) id: number) {
    //
    // response.status(200).send({ // con express
    //   message: `Product ${id}`
    // })
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Accion de crear',
    //   payload
    // }
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    // return {
    //   message: 'Accion de update',
    //   id,
    //   payload
    // }

    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
