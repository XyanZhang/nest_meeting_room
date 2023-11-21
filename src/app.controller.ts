import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { RequireLogin, RequirePermission, UserInfo } from './custom.decorator';

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
  @RequireLogin()
  @RequirePermission('ddd') // ccc
  needLogin(@UserInfo('username') username: string, @UserInfo() userInfo) {
    console.log('need login', username, userInfo)
    return 'need login'
  }
}