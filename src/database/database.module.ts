import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';

const API_KEY = '12224243';
const API_KEY_PROD = '1222424jj3';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, name, password, port } = configService.postgres;

        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: name,
          synchronize: false, //para sincronizar a la db y crear las tablas si es necesario
          autoLoadEntities: true
        };
      },
      inject: [config.KEY],
    })
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, name, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: name,
          password,
          port,
        });

        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
