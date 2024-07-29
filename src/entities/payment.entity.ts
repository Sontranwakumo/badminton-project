import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentDetail } from './payment_detail.entity';
import { PaymentStatus } from '../../src/commons/enums/PaymentStatus.enum';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => PaymentDetail, (paymentDetail) => paymentDetail.payment)
  details: PaymentDetail[];
}
