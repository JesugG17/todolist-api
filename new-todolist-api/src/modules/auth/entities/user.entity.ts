import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userid: number;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        default: true
    })
    status: boolean;

}