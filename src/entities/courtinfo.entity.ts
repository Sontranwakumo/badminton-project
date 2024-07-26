import { UserRole } from "src/common/enum";
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

    @Column({default:true})
    is_active: boolean;

    @Column({default:false})
    is_locked: boolean;

    @OneToMany(()=>Comment,comment=>comment.court)
    comments: Comment[]
}