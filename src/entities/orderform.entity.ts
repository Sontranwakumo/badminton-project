import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { CourtInfo } from './courtinfo.entity';
import { Payment } from './payment.entity';
import { TimeSlot } from './timeslot.entity';
import { BookStatus } from '../../src/commons/enums/BookStatus.enum';

@Entity()
export class OrderForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sender_id: string;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @ManyToOne(() => CourtInfo)
  @JoinColumn()
  court: CourtInfo;

  @Column({
    type: 'enum',
    enum: BookStatus,
    default: BookStatus.PENDING,
  })
  book_status: BookStatus;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ nullable: true })
  note: string;

  @OneToOne(() => Payment, { cascade: true })
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

  @OneToMany(() => TimeSlot, (time) => time.order)
  timeslots: TimeSlot[];
}
