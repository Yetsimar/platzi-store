import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { User } from 'src/users/entities/users.entity';
import { ProductsService } from '../../products/services/products.service';
import { ConfigService } from '@nestjs/config'


@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService
  ) {}
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      firtsname: 'firts',
      lastname: 'last',
      email: 'tedff@gmail.com',
      password: '213233',
    },
  ];

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME')
    console.log(apiKey, dbName)
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id == id);
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id == id);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id == id);
    if (index == -1) throw new NotFoundException(`User #${id} not found`);
    this.users.splice(index, 1);
    return true;
  }

  getOrdersByUser(id: number) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
