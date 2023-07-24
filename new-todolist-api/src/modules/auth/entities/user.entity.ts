import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    userid: number;

    @Column()
    userName: string;

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
    photoUrl: string;

}