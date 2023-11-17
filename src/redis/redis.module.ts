import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory(configService: ConfigService) {
        let host = configService.get("redis_server_host");
        let port = configService.get("redis_server_port");
        let password = configService.get("redis_server_password");
        let db = configService.get("redis_server_db");

        const client = createClient({
            socket: {
              host,
              port,
            },
            database: db,
            password
        });
        await client.connect();
        return client;
      },
      inject: [ConfigService]
    }
  ],

  exports: [RedisService]
})
export class RedisModule {}

