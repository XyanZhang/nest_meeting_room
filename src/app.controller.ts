import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('no-login')
  noLogin(): string {
    return 'no need login'
  }
  @Get('need-login')
  @SetMetadata('require-login', true)
  needLogin(): string {
    return 'need login'
  }

}