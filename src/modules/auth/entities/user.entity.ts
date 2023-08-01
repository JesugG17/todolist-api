import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    userid: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        default: true,
    })
    status: boolean;

    @Column({
        default: false
    })
    google: boolean;

    @Column({ nullable: true })
    photourl: string;

    @Column({ nullable: true })
    isupdatingpass: boolean;
    

}