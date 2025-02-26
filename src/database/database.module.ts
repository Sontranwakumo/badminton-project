import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configs: ConfigService) => ({
        type: 'postgres',
        host: configs.get('DB_HOST') || 'localhost',
        port: configs.get('DB_PORT') || 5432,
        username: configs.get('POSTGRES_USER') || 'postgres',
        database: configs.get('POSTGRES_DB') || 'testdb',
        password: configs.get('POSTGRES_PASSWORD') || 'dhruv',
        autoLoadEntities:true,
        synchronize:configs.get("SYNCHRONIZE")||true
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
