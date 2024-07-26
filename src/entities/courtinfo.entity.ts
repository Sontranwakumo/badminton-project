import { CourtStatus, UserRole } from "src/common/enum";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Branch } from "./branch.entity";
import {Comment} from "./comment.entity";
@Entity()
export class CourtInfo {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name_of_court: string;

    @Column()
    description: string;

    @Column()
    id_branch: string;// khoá ngoại

    @ManyToOne(()=>Branch, branch=> branch.courts)
    @JoinColumn({name:'id_branch'})
    branch: Branch

    @Column({
        type: 'enum',
        enum: CourtStatus,
        default: CourtStatus.ACTIVE
    })
    status: CourtStatus

    @OneToMany(()=>Comment,comment=>comment.court)
    comments: Comment[]
}