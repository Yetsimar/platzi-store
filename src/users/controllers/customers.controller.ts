import {
  Controller,
  Get,
  Query,
  ParseIntPipe,
  Put,
  HttpCode,
  HttpStatus,
  Body,
  Delete,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/users/dtos/customers.dto';
import { CustomersService } from 'src/users/services/customers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get()
  find(@Query('limit') limit: 100, @Query('offset') offset: 0) {
    return this.customerService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customerService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateCustomerDto) {
    return this.customerService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.customerService.remove(+id);
  }
}
