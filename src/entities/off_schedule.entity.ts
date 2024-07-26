import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Branch } from './branch.entity'; // Đường dẫn tùy thuộc vào vị trí của file entity Branch

@Entity()
export class OffSchedules {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Branch, branch => branch.offSchedules)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column('time', { nullable: true })
  start_time: string;

  @Column('time', { nullable: true })
  end_time: string;

  @Column('date')
  start_date: Date;

  @Column('date')
  end_date: Date;

  @Column({ default: 0 })
  loop_week: number;
}
