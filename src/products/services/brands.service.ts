import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dto';
import { Brand } from 'src/products/entities/brands.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'brand 1',
      description: 'desd'
    }
  ]

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find( (item) => item.id == id);
    if(!brand)
    throw new NotFoundException(`Brand #${id} not found`);
  return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand  = this.findOne(id);
    if(brand){
      const index = this.brands.findIndex((item) => item.id == id);
      this.brands[index] = {
        ...brand,
        ...payload
      }
      return this.brands[index];
    }
    return null
  }

  remove(id: number) {
    const index = this.brands.findIndex((item) => item.id == id);
    if(index == -1) throw new NotFoundException(`Brand #${id} not found`);
    this.brands.splice(index, 1);
    return true
  }
}
