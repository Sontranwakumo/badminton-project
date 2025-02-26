import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Payment } from './payment.entity';

@Entity()
export class PaymentDetail {
  @PrimaryGeneratedColumn()
  id_detail: number;

  @ManyToOne(() => Payment, (payment) => payment.details)
  @JoinColumn({ name: 'id_payment' })
  payment: Payment;

  @Column()
  amount: number;

  @Column()
  payment_method: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  payment_time: Date;

  @Column({ default: false })
  status: boolean;
}
