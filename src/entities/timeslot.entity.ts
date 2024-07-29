import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CourtInfo } from './courtinfo.entity';
import { OrderForm } from './orderform.entity';

@Entity()
export class TimeSlot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CourtInfo)
  @JoinColumn({ name: 'court_id' })
  court: CourtInfo;

  @Column('time')
  start_time: string;

  @Column('time')
  end_time: string;

  @Column('date')
  match_date: string;

  @ManyToOne(() => OrderForm, (ord) => ord.timeslots, { nullable: true })
  @JoinColumn({ name: 'order_id' })
  order: OrderForm;
}
