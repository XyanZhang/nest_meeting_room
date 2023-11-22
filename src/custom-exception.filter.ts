import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

// 修改默认的响应格式，直接定义 catch HttpException 的 filter
@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    response.statusCode = exception.getStatus();

    const res = exception.getResponse() as {message: string[]};

    response.json({
      code: exception.getStatus(),
      message: 'fail',
      data: res?.message?.join(',') || exception.message
    }).end();
  }
}
