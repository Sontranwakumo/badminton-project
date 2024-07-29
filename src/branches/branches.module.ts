import { Module } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { BranchesController } from './branches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourtInfo } from 'src/entities/courtinfo.entity';
import { Branch } from 'src/entities/branch.entity';
import { User } from 'src/entities/user.entity';
import { OrderForm } from 'src/entities/orderform.entity';
import { DefaultPrice } from 'src/entities/default_price.entity';
import { OffSchedules } from 'src/entities/off_schedule.entity';
import { OpenSchedule } from 'src/entities/open_schedule.entity';
import { Payment } from 'src/entities/payment.entity';
import { PaymentDetail } from 'src/entities/payment_detail.entity';
import {Comment} from 'src/entities/comment.entity'
import { TimeSlot } from 'src/entities/timeslot.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CourtInfo,Branch,User,OrderForm,DefaultPrice,OffSchedules,OpenSchedule,Payment,PaymentDetail,Comment,TimeSlot])],
  controllers: [BranchesController],
  providers: [BranchesService],
})
export class BranchesModule {}
