import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Branch } from './branch.entity'; // Đường dẫn tùy thuộc vào vị trí của file entity Branch

@Entity()
export class DefaultPrice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Branch, branch => branch.defaultPrices)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column('time')
  start_time: string;

  @Column('time')
  end_time: string;

  @Column()
  price: number;
}
