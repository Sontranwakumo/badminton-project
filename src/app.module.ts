import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CourtsModule } from './courts/courts.module';
import { BranchesModule } from './branches/branches.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    DatabaseModule,
    CourtsModule,
    BranchesModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
