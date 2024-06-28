import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Hola';
  }

  @Get('tasks')
  tasks() {
    return this.appService.getTasks();
  }

  @Get('tasks/:id')
  getOneTask(@Param('id') id: number) {
    return this.appService.getOneTask(id);
  }
}
