import { BaseEntity, Column, Entity, PrimaryColumn, Table } from "typeorm";

@Entity()
export class Tasks extends BaseEntity {

    @PrimaryColumn()
    taskId: string;

    @Column()
    description: string;

    @Column({
        default: true
    })
    status: boolean;

    @Column()
    userId: number;
     
}