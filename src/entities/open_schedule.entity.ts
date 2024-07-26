import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Branch } from './branch.entity'; // Đường dẫn tùy thuộc vào vị trí của file entity Branch

@Entity()
export class OpenSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Branch, branch => branch.openSchedules)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column('time',{nullable:true})
  start_time: string;

  @Column('time',{nullable:true})
  end_time: string;
  @Column()
  day_of_week: number;
}
