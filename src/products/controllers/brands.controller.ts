import {
  Controller,
  ParseIntPipe,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpCode,
  Body,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dto';
import { BrandsService } from 'src/products/services/brands.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  @Get()
  find(@Query('limit') limit: 100, @Query('offset') offset: 0) {
    return this.brandService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateBrandDto) {
    return this.brandService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.brandService.remove(+id);
  }
}
