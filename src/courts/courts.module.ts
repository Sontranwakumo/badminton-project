import { Module } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CourtsController } from './courts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtInfo } from 'src/entities/courtinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourtInfo])],
  controllers: [CourtsController],
  providers: [CourtsService],
})
export class CourtsModule {}
