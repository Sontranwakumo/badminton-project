import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity'; // Đường dẫn tùy thuộc vào vị trí của file entity User
import { CourtInfo } from './courtinfo.entity'; // Đường dẫn tùy thuộc vào vị trí của file entity CourtInfo
import { count } from 'console';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'sender_id' })
  sender: User;

  @ManyToOne(() => CourtInfo, (court) => court.comments)
  @JoinColumn({ name: 'court_id' })
  court: CourtInfo;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @Column()
  message: string;
}
