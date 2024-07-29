import { UserRole } from '../../src/commons/enums/UserRole.enum';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourtInfo } from './courtinfo.entity';
import { User } from './user.entity';
import { DefaultPrice } from './default_price.entity';
import { OpenSchedule } from './open_schedule.entity';
import { OffSchedules } from './off_schedule.entity';

@Entity()
export class Branch extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column()
  address: string;

  @OneToMany(() => CourtInfo, (court) => court.branch)
  courts: CourtInfo[];

  @OneToMany(() => DefaultPrice, (defaultPrice) => defaultPrice.branch)
  defaultPrices: DefaultPrice[];

  @OneToMany(() => OpenSchedule, (openSchedule) => openSchedule.branch)
  openSchedules: OpenSchedule[];

  @OneToMany(() => OffSchedules, (offSchedules) => offSchedules.branch)
  offSchedules: OffSchedules[];
}
